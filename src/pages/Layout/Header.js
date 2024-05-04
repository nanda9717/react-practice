import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className='header-section'>
        <header>
            <div className='logo-section'>
                <p className='logo'>LOGO</p>
                <div>
                    <label htmlFor="check" id="check-label"><i className='fa fa-bars'></i></label>
                </div>
            </div>
            <nav className='menu'>
                <input type="checkbox" id="check" />
                <ul id='menu-list'>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className='login-btns'>
                <button className='login-btn'>Login</button>
                <button className='signup-btn'>Sign Up</button>
            </div>
        </header>
    </div>
  )
}
