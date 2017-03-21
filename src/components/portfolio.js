import React, { Component } from 'react';
import Sites from './sites'

class Portfolio extends Component{
    constructor(props){
        super(props);
        
        this.state={
           i:0,
            site:{ 
                img:'img/siteone.png',
                front:"HTML ,CSS , JavaScript",
                back:'Back-end: Node.js Express.js',
                client:'For Personal Project',
                href : 'www.bojanvasilevski.com'
            },
            sites:[
                {img:'img/siteone.png',front:"HTML ,CSS ,JavaScript ,JQuery",back:'Node.js Express.js, MongoDB',client:'For Personal Project', href : 'www.bojanvasilevski.com'},
                {img:'img/sitetwo.png',front:"HTML ,CSS ,JavaScript ,JQuery  ,Bootstrap",back:'Node.js Express.js, MongoDB',client:'For Personal Project ', href : 'www.bojanvasilevski.com'},
                {img:'img/sitetre.png',front:"HTML ,CSS ,JavaScript ,JQuery",back:'Node.js, Express.js, MongoDB',client:'For Client ', href : 'www.bojanvasilevski.com'},
                {img:'img/sitefour.png',front:"HTML ,CSS ,JavaScript ,Angular ,JQuery ,Bootstrap",back:'Node.js Express.js, MongoDB, Mongoose',client:'For Client ', href : 'www.bojanvasilevski.com'}
            ]
        }
    }
    prev(){
         if(this.state.i > 0 ){
             this.setState({
                 i: this.state.i -1
             })
         }else{
             this.setState({
                 i:3,
             })
         }
    }
    next(){
        if(this.state.i<3){
            this.setState({
                i: this.state.i +1
            })          
        }else{
            this.setState({
                i: 0
            })
        }
    }
    render(){
        return(
            <div id ='port'>
            <a id ='left' onClick ={()=>{this.prev(this.state.i)}} ><i className="fa fa-arrow-left" aria-hidden="true"></i></a>
             <a id = 'right' onClick ={()=>{this.next(this.state.i)}} ><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                <h3 onClick ={()=>{console.log(this.state.i)}}>Portfolio</h3>
                <Sites site ={this.state.sites} i ={this.state.i} />
            </div>
        )
    }
}

export default Portfolio;