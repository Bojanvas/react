import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            list: [ "About", "Portfolio","Blog", "Contact"]
        }
    }

    render() {
        const menu = this.state.list.map(function(part, i) {
            return <li key = { i } > < a href = { part } > { part } < /a></li >
        })
        return ( <
            div className = 'header' >
            <
            div className = "cont" >
            <
            a id = 'logo' href = "/" > Bojan Vasilevski < /a> <
            ul > { menu } <
            /ul> <
            /div> <
            /div>
        )
    }
}
export default Header;