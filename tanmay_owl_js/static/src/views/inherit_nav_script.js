import { ControlPanel } from "@web/search/control_panel/control_panel";
import { patch } from "@web/core/utils/patch";
import { onMounted } from "@odoo/owl";
import { NavBar } from "@web/webclient/navbar/navbar";


patch(NavBar.prototype, {

    onClickSendHello() {
    console.log("Button clicked");
        }

});