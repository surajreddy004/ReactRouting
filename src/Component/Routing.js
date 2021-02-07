import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route path='/Post' component={Post}/>
            <Route path='/Profile' component={Profile}/>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routing;