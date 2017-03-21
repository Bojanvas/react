import React, {Component} from 'react';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: []
        }
    }
    componentWillMount(nextProps,nextState){
        console.log('pervious');
    }
    componentDidMount(){
        this.getpost();
    }
    getpost(){
        var self = this;
        var id = this.props.params.id;
        var url = 'onepost/' + id;
    fetch(url,{
        method:"GET",
        header:{
            'Accept':'application/json',
                'Content-Type':'application/json',
        }
    }).then(function(response){
        console.log(response);
        response.json().then(function(data){
            
            self.setState({
                post:data
            })
            
        })
    })
    }
    render(){
        return(
            <div className='po'>
            <div className = 'post'>
                <h4>{this.state.post.title}</h4>
                <img src= {this.state.post.url} alt="Post"/>
                <p className='date' >{this.state.post.data}</p>
                <p className ='text'>{this.state.post.content}</p>
            </div>
            </div>
        )
    }
}


export default Post;