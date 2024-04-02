import React from 'react';
import logo from '../../Assets/logo.jpg';
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


import './Header.css'
const Header = () => {
    return (
        <header className="headers">
            <div className="header">
                <figure>
                    <img src={logo} alt="Logo"/>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Pickle Arcade</a></li>
                        <li><a href="/collection">Picklehub</a></li>
                        <li><a href="/collection">Pickle Paper</a></li>
                    </ul>
                </figure>
                <nav>
                    <ul>
                        <li><a href="/"><FaDiscord/></a></li>
                        <li><a href="/about"><FaTwitter/></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
