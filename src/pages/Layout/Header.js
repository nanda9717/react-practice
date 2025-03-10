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
                    <li><NavLink activeclassname="active" to="/">Home</NavLink></li>
                    <li><NavLink activeclassname="active" to="/about">About</NavLink></li>
                    <li><NavLink activeclassname="active" to="/contact">Contact</NavLink></li>
                    <li><NavLink activeclassname="active" to="/learning">Learning</NavLink></li>
                </ul>
            </nav>
            <div className='login-btns'>
                <ul className='auth-btn'>
                    <li className="login-btn"><NavLink to="/login">Login</NavLink></li>
                    <li className="signup-btn"><NavLink to="/">Sign Up</NavLink></li>
                </ul>
            </div>
        </header>
    </div>
  )
}
