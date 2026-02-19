/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Counter } from "./counter";

export class Parent extends Component {
    static template = "tanmay_owl_js.Parent"; // This connect JS -> xml
    static components = { Counter };

    setup(){
        this.originalCounters = [5, 100, 0];
        this.state = useState({
            counters: [5, 100, 0],
        });
    }

    increment = (index) => {
        this.state.counters[index]++;
    }

    decrement = (index) => {
        if (this.state.counters[index] > 0) {
            this.state.counters[index]--;
        }
    }

    reset = (index) => {
        this.state.counters[index] = this.originalCounters[index]
    }

    resetAll = () => {
        // this.state.counters = this.state.counters.map(() => 0);
        this.state.counters = [...this.originalCounters]
    }
}

// Register Parent as client action
registry.category("actions").add("tanmay_owl_js.hello_action", Parent);
