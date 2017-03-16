import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Side extends Component{
    text(){
          var textholder = document.querySelector('#skills');
          var text = document.querySelector('#text');
          textholder.className ='fadeout';
          text.className = 'fadein';

       }
    render(){
       var skills = this.props.obj.skils;
       var sk = document.getElementById('skills')

       
       var skils = skills.map((skil,i) =>{
                return <h5 key = {i} >{skil}</h5>;      
        }) 
        return(
            <div id="sidecont"style ={this.props.obj.color}>
                <h3>{this.props.obj.title}</h3>
                <div id= 'skills' className="">
                    {skils}
                </div>
                <div id ='text' className="fadeout">
                    {this.props.obj.text}
                </div>
                <div className="info">
                <h5 className = 'author'>{this.props.obj.author}</h5>
                <a href = 'contact'>{this.props.obj.contact}</a>
             </div>   
             <button id ='next' onClick ={()=>{this.text()}} className = 'btn btn-danger' >Next</button>
            </div> 
        )                   
    }
}

export default Side;