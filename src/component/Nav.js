import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <div className='text-white'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/add">Add</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/edit">Edit</Link>
                </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        );
    }
}

export default Nav;