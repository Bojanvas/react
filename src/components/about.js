import React, { Component } from 'react';
import Aboutme from "./aboutme";

class About extends Component{
    render(){
        const title = 'Bojan Vasilevski';
        return(
            <div className="About">
            <h3>About</h3>
            {title}
            {this.props.children}
            </div>
        )
    }
}
export default About;