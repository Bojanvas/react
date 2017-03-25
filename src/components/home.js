import React, {Component} from "react";
import Side from './homeside';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            design : {
                title:"Design",
                skils:['HTML  ',"CSS  ","Bootstrap  ","JavaScript  ","JQuery  ","React  ","Angular  ","Photoshop  "],
                text:["I create my websites using the latest technology to produce websites that work no matter what device they are being viewed on."],
                author: "Bojan Vasilevski",
                contact:"If you like what you see contact me",
                 color:{backgroundColor:'rgb(214, 211, 40)'}
            },
            develop : {
                title:"Web Developer",
                skils:['Node.js  ',"Express  ","MongoDB  ","Mongoose  ","Php  "],
                text:["Social Media is a powerful part of a comprehensive marketing strategy, boost your visibility and increase your dialogue with your customers"],
                author: "Bojan Vasilevski",
                contact:"If you like what you see contact me",
                color:{backgroundColor:'rgb(40, 214, 92)'}
            },
            obj:{
                title:"Hello World",
                skils:['Wellcome to my site if you whant to read more about me and what have i designed check the tabs'],
                author: "Bojan Vasilevski",
                contact:"Contact me",
                color:{backgroundColor:'rgb(96, 74, 140)',display:'none' }

            }
        }
    }
    obj(parms){
        
        if(parms == 'design'){
            this.setState({
               obj:this.state.design
             } )
            var anime = document.getElementById('design');
            var appear = document.querySelector('#sidecont');
            var ap1 = document.querySelector('#developer');
            document.querySelector('#text').className = 'fadeout';
            document.querySelector('#skills').className = 'fadein';
            ap1.className = 'fadein';
            anime.className = ' fadeout';
           appear.className = " appear";
             
        }else if (parms == 'develop'){
            this.setState({
                obj:this.state.develop
            })
            var anime = document.querySelector('#developer');
            var appear = document.querySelector('#sidecont');
            var ap2 = document.querySelector('#design');
                        document.querySelector('#text').className = 'fadeout';
            document.querySelector('#skills').className = 'fadein';
            ap2.className= 'fadein';
            anime.className = ' fadeout';
            appear.className = " appear";
            
        }
    }
    render(){
        return(
            <div className="homealone">
            <div className="home ">
             <ReactCSSTransitionGroup
             transitionName='main'
             transitionAppear = {true}
             transitionAppearTimeout = {1000}
             transitionEnter= {false}
             transitionLeave = {false}>
                <div className="two">
                   <div id = 'design' className="">
                    <h2>Web Design</h2>
                    <img src = 'img/des.png' alt = 'design' />
                    <p>My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
                    <button id ='bt' onClick = {()=>{this.obj('design') }} className = 'btn btn-info'>Show me more</button> 
                   </div>
                   <Side  obj={this.state.obj} />
                  <div id = 'developer' className="developer">
                  <h2>Web Development</h2>
                  <img src = 'img/node.png' alt = 'develoop' />
                  <p>I develop to ensures your website is lightweight, easily expandable, search engine friendly and of course W3C compliant</p>
                  <button id ='bt'  onClick = {()=>{this.obj('develop') }} className = 'btn btn-info'>Show me more</button>
                  </div>
                </div>
                  </ReactCSSTransitionGroup>
            </div>
            
           
            </div>
        )
    }
}
export default Home;

