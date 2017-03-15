import React, {Component} from "react";
import Side from './homeside';
import Design from "./design";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            design : {
                title:"Design",
                skils:['HTML',"CSS","Bootstrap","JavaScript","JQuery","React","Angular","Photoshop"],
                author: "Bojan Vasilevski",
                contact:"If you like what you see contact me"
            },
            develop : {
                title:"Web Developer",
                skils:['Node.js',"Express","MongoDB","Mongoose","Php"],
                author: "Bojan Vasilevski",
                contact:"If you like what you see contact me"

            },
            obj:{
                title:"Hello World",
                skils:[],
                author: "Bojan Vasilevski",
                contact:"Contact me"

            }
        }
    }
    obj(parms){
        
        if(parms == 'design'){
            console.log('design');
             this.setState({
               obj:this.state.design
             } )
        }else if (parms == 'develop'){
            this.setState({
                obj:this.state.develop
            })
        }
    }
    render(){
        return(
            <div className="homealone">
            <div className="home">
                <div className="two">
                   <div className="design">
                    <h2>Web Design</h2>
                    <img src = 'img/des.png' alt = 'design' />
                    <p>My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
                    <button onClick = {()=>{this.obj('design') }} className = 'btn btn-info'>Show me more</button>
                   </div>
                  <div className="developer">
                  <h2>Web Development</h2>
                  <img src = 'img/node.png' alt = 'develoop' />
                  <p>I develop to ensures your website is lightweight, easily expandable, search engine friendly and of course W3C compliant</p>
                  <button  onClick = {()=>{this.obj('develop') }} className = 'btn btn-info'>Show me more</button>
                  </div>
                </div>
            </div>
            
            <Side obj={this.state.obj} />
            </div>
        )
    }
}
export default Home;