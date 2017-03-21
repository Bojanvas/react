import React, { Component } from "react";
import { Router, IndexRoute, Route, browserHistory,useRouterHistory  } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import ReactDom from 'react-dom';
import Header from './components/header';
import Home from './components/home';
import About from "./components/about";
import Contact from "./components/contact";
import Aboutme from "./components/aboutme";
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Post from './components/post';
import Posts from './components/posts';

const history = useRouterHistory(createHistory)({ basename: '/' });

class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='mo'>
             <Header />

             {this.props.children}
             <Footer />
            </div>
        );
    }

}
ReactDom.render((
    <Router history={browserHistory }>
        <Route path = '/' component ={App} >
            <IndexRoute component = {Home}>
            </IndexRoute>
            <Route path = 'about' component={About}>
                <IndexRoute component = {Aboutme}></IndexRoute>
            </Route>
            <Route path='blog' component ={Blog}>
                <IndexRoute component = {Posts} > </IndexRoute>
                <Route path = '/post/:id' component = {Post} />
            </Route>
            <Route path = 'portfolio' component={Portfolio}></Route>
            <Route path = "contact" component = {Contact}></Route>
        </Route>
    </Router>
),document.getElementById('root'))
