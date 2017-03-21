import React, {Component} from 'react';

class Posts extends Component{
constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
        this.get();
    }
    componentWillMount(nextProps,nextState){
        console.log('prevous state' +this.state.posts);
        
    }
    get(){
        var self = this;
        fetch('/blogpost',{
            method:"GET",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        
        }).then(function(response){
            response.json().then(function(data){
                console.log(data);
                self.setState({
                    posts: data
                })
            })
        })
    }

    render(){
        return(
            <div>
             {this.state.posts.map(function(post,i){
                return(   
                     <div key = {i} className="posts">
                     <h3 className ='titblog' >{post.title}</h3>
                   <img src={post.url} alt="posts"/>
                   <p className='conten'>{post.content}</p>
                   <p>{post.data}</p>
                   <a href = {'post/'+post._id}>Read more</a>
                   </div>
                )
                })}
                </div>
        )
    }
}

export default Posts;