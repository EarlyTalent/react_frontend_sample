import React from 'react';
import logo from './../levvel-logo.svg';

const NavBar = () => {
    return (
        <header className='App-navbar'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Levvel's Blog Website</h1>
        </header>
    )
}

export default NavBar;