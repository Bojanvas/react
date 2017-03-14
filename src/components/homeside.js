import React, { Component } from 'react';

class Side extends Component{
    render(){
        var skils = this.props.design.skils.map((skil) =>{
            return skil;
        })
        return(
            <div className="sidecont">
                <h3>{this.props.design.title}</h3>
                <div className="skills">
                    <h5>{skils}</h5>
                </div>
                
            </div>
        )
    }
}

export default Side;