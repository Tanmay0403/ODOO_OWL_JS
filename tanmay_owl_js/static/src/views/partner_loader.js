/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class PartnerLoader extends Component{
    static template = "tanmay_owl_js.PartnerLoader"

    setup()
    {
        this.orm = useService("orm")

        this.state = useState(
            {
                partners : [],
                loading : false
            }
        );
    }

    async loadPartners() {
        this.state.loading = true;

        const partners = await this.orm.searchRead(
            "res.partner",
            [],
            ["name","email"],
            { limit: 10 }
        );

        this.state.partners = partners;
        this.state.loading = false;
    }
}
registry.category("actions").add(
    "tanmay_owl_js.partner_loader_action",
    PartnerLoader
);