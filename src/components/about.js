import React, { Component } from 'react';
import Aboutme from "./aboutme";
    
class About extends Component{
    constructor(props){
        super(props);
        this.state={
            style:{
                backgroundColor:'white'
            },
            style1:{
                backgroundColor:'white'
            }
        }
    }
    pos(event){
        var posi = event.clientY;
        if(posi>300){
            this.setState({
                style:this.state.style1
            });
        }if(posi<300){
            this.setState({
                style:this.state.style
            })
        }
    }
    render(){
        
        
        const title = 'Bojan Vasilevski';
        return(
            <div onMouseMove={this.pos.bind(this)}  className="About" style = {this.state.style}>
            <h3>About Me</h3>
            <div className="bout">
                        <img src = 'img/me.png'  />
                        <div className="tex">
                        <p>I`m creative Web Designer and Web Developer based in Skopje, Macedonia.i have started studying myself from the beginning in 2016 and im still learning; I am designed and developed websites , web application , single-pages applications;Clients often approach me when they need someone with the following skills:</p>
                        <ul><li>Front-end development
                        <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript<ul>
                        <li>Jquery</li>
                        <li>React.js</li>
                        <li>Angular.js</li>
                        </ul></li>
                        <li>Photoshop</li>
                        <li>SEO</li>
                        <li>Animation</li>
                        </ul>
                        </li>
                        <li>Back-end development
                        <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>PHP</li>
                        </ul>
                        </li>
                        </ul>
                        <p>When working on a project, i like to speak to my client so that i can have clear understanding of their needs; Thank you in advance for your time;</p>
            </div>
            </div>
            </div>
        )
    }
}
export default About;