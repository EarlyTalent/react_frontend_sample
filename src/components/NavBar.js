import React from 'react';
import logo from './../levvel-logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className='App-navbar'>
            <Link to={{pathname: '/'}}>
                <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <nav>
                <Link className='Nav-item' to={{pathname: '/'}}>Home</Link>
                <Link className='Nav-item' to={{pathname: '/'}}>About Us</Link>
                <Link className='Nav-item' to={{pathname: '/'}}>FAQ</Link>
                <Link className='Nav-item' to={{pathname: '/'}}>Contact Us</Link>
            </nav>
        </header>
    )
}

export default NavBar;