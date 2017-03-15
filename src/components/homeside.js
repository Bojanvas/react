import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Side extends Component{
    render(){
       var skills = this.props.obj.skils;
       var sk = document.getElementsByClassName('skills')

     
       var skils = skills.map((skil,i) =>{
                return <h5 key = {i} >{skil}</h5>;      
        }) 
        return(
            <div className="sidecont">
                <h3>{this.props.obj.title}</h3>
                <div className="skills">
                <ReactCSSTransitionGroup
                    transitionName = 'apper'
                    transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                    {skils}
                    </ReactCSSTransitionGroup>
                </div>
                <div className="info">
                <h5 className = 'author'>{this.props.obj.author}</h5>
                <a href = 'contact'>{this.props.obj.contact}</a>
             </div>   
            </div> 
        )
    }
}

export default Side;