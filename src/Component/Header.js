import React from 'react';
import {Link} from 'react-router-dom'

const Header=()=>{
    return(
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">SurajReddy</a>
    </div>
    <ul className="nav navbar-nav">
      
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Post">Post</Link></li>
      <li><Link to="/Profile">Profile</Link></li>
    </ul>
  </div>
</nav>
    )
}

export default Header;