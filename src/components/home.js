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

            }
        }
    }
    render(){
        return(
            <div className="homealone">
            <div className="home">
                <h1>Web Designer and Web Developer</h1>
                <div className="two">
                   <div className="design">
                    <h2>Web Design</h2>
                    <i className="fa fa-desktop" aria-hidden="true"></i>
                    <p>My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
                    <button className = 'btn btn-info'>Show me more</button>
                   </div>
                  <div className="developer">
                  <h2>Web Development</h2>
                  <i className="fa fa-book" aria-hidden="true"></i>
                  <p>I develop to ensures your website is lightweight, easily expandable, search engine friendly and of course W3C compliant</p>
                  <button className = 'btn btn-info'>Show me more</button>
                  </div>
                </div>
            </div>
            
            <Side design={this.state.design} />
            </div>
        )
    }
}
export default Home;