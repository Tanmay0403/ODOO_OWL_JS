/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class PartnerLoader extends Component{
    static template = "tanmay_owl_js.PartnerLoader"

    setup()
    {
        this.orm = useService("orm")

        this.allPartners = [];

        this.state = useState(
            {
                partners : [],
                loading : false,
                search: "",
                page: 1,
                limit: 10,
                total: 0,
            }
        );
        this.loadPartners();
    }

    async loadPartners() {
        this.state.loading = true;
        const offset = (this.state.page - 1) * this.state.limit;

        const partners = await this.orm.searchRead(
            "res.partner",
            [],
            ["name","email"],
            {
                limit: this.state.limit,
                offset: offset,
            }
            // { limit: 10 }
        );
        const total = await this.orm.searchCount("res.partner", []);

        this.allPartners = partners;
        this.state.partners = partners;
        this.state.total = total;
        this.state.loading = false;
    }

    onSearch(ev) {
        const value = ev.target.value.toLowerCase();
        this.state.search = value;

        this.state.partners = this.allPartners.filter(partner =>
            (partner.name && partner.name.toLowerCase().includes(value)) ||
            (partner.email && partner.email.toLowerCase().includes(value))
        );
    }

    nextPage() {
        if (this.state.page * this.state.limit < this.state.total) {
            this.state.page++;
            this.loadPartners();
        }
    }

    prevPage() {
        if (this.state.page > 1) {
            this.state.page--;
            this.loadPartners();
        }
    }
}
registry.category("actions").add(
    "tanmay_owl_js.partner_loader_action",
    PartnerLoader
);