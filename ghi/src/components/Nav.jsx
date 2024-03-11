import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><Link to="/login">Login</Link></li>
            <li><NavLink to="/signUp">SignUp</NavLink></li>
        </ul>
    )
}

export default Nav;
