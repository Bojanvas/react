import React, {Component} from 'react';
import Post from './post';
import Posts from './posts';

class Blog extends Component{
    
    render(){
        return(
            <div className="blog">
                <h5 onClick = {()=>{console.log(this.state.posts)}}>Blog</h5>
                {this.props.children}
            </div>
        )
    }
}

export default Blog;