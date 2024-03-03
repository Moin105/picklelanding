import React from 'react';
import logo from '../../Assets/logo.jpg';

import './Header.css'
const Header = () => {
    return (
        <header className="headers">
            <div className="header">
                <figure>
                    <img src={logo} alt="Logo"/>
                </figure>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/collection">Collection</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
