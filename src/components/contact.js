import React, {Component} from "react";

class Contact extends Component{
    constructor(){
        super();
        this.state ={
            person:{
                name:'',
                secondname:'',
                email:'',
                message:'',
            }
        }
    }
   
    next(){
        var namee = document.querySelector('#name').value;
        var surnamee = document.querySelector('#surname').value;
        var emaile = document.querySelector('#email').value;
        this.setState({
            person:{
            name : namee,
            secondname : surnamee,
            email : emaile
            }
        },function(){
            console.log(this.state.person)
        })
        document.querySelector('#next').style.display ='none';
        document.querySelector('#submit').style.display = 'block';
        document.querySelector('#conta').className = 'fadeout';
        document.querySelector('#final').className ='fadein';
        
    }
    sub(){
        var mes = document.querySelector('#message').value;
        this.setState({
            person:{
                name: this.state.person.name,
                secondname: this.state.person.secondname,
                message:mes,
                email:this.state.person.email
            }
        },function(){
            console.log(this.state.person);
        })
        this.componentDidUpdate();

    }

    send(){
             fetch('/api/contact',
        {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                data:this.state.person
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        this.send();   
    }
    render(){
        return(
            <div className="Contact">
            <h3  onClick = {()=> {console.log(this.state.person)}}>Contact</h3>
            <div id= 'conta'  className=" "> 
            <form className='form-group'>
                <label  className='control-label'>Name:</label><input id ='name' className='form-control' name = 'name' type="text" placeholder ='Enter your name' required/>
                <label  className='control-label'>Surname:</label><input id ='surname' className='form-control' name = 'surname' type="text" placeholder = 'your second name pls' required />
                <label  className='control-label'>Email:</label><input  id ='email' className='form-control' name = 'email' type="email" placeholder = 'Your Email here pls' required/>
                </form>
            </div>
             <button id='next'  onClick = {()=>{this.next()}} className='btn btn-danger'>Next</button>
               <div id = 'final' className="fadeout">
                <label>Message :  </label> <textarea placeholder = 'Write your message here' type="textarea" id ='message' cols ='140' rows = '5'/>
            </div>
             <button id = 'submit'  onClick = {()=>{this.sub()}} className='btn btn-danger'>Submit</button>
            
            </div>
           
        )
    }
}
export default Contact;