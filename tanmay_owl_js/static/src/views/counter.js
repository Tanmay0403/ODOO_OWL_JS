// /** @odoo-module **/

// import { Component } from "@odoo/owl";
// import { registry } from "@web/core/registry";

// export class HelloWorld extends Component {
//     static template = "tanmay_owl_js.HelloWorld";
// }

// // Register as client action
// registry.category("actions").add("tanmay_owl_js.hello_action", HelloWorld);


/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Counter extends Component {
    static template = "tanmay_owl_js.Counter";
    //Props
    // static props = ["start"];
    static props = ["value", "index", "onIncrement", "onDecrement" , "onReset"];
    custom_heading = document.querySelector("#custom_heading")

    // setup() {
    //     // this.state = useState({
    //     //     // count: 0,
    //     //     count: this.props.start || 0,
    //     // });
    //     this.props.value
    // }

    increment() {
        this.props.onIncrement(this.props.index);
        // console.log(this.props.value)
    }

    decrement() {
        this.props.onDecrement(this.props.index);
    }

    reset() {
        this.props.onReset(this.props.index);
    }
    // increment() {
    //     this.state.count++;
    // }
    // decrement() {
    //     if(this.state.count > 0)
    //     this.state.count--;
    // }
    // reset() {
    //     this.state.count = this.props.start || 0;
    // }

    get getColors()
    {
        if (this.props.value > 10)
        {
            return "text-success";
        }
        else if(this.props.value < 5)
        {
            return "text-danger";
            // this.custom_heading.style.color = "red";
        }
        else
        {
            return "text-dark"
        }
    }
}
// registry.category("actions").add("tanmay_owl_js.hello_action", Counter);
