import React, { Component } from "react";
import { Router, IndexRoute, Route, browserHistory  } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import ReactDom from 'react-dom';
import Header from './components/header';
import Home from './components/home';
import About from "./components/about";
import Contact from "./components/contact";
import Aboutme from "./components/aboutme";
import Design from "./components/design";
import Footer from './components/footer';



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
                <Route path = 'design' component ={Design}></Route>
            </IndexRoute>
            <Route path = 'about' component={About}>
                <IndexRoute component = {Aboutme}></IndexRoute>
            </Route>
            <Route path = "contact" component = {Contact}></Route>
        </Route>
    </Router>
),document.getElementById('root'))
