// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <span className="hamburger-btn material-symbols-rounded">menu</span>
                <Link to="/" className="logo">
                    <img src="/OIP.jpg" alt="logo"  />
                    <h2>Timing.in</h2>
                </Link>
                <ul className="links">
                    <span className="close-btn material-symbols-rounded">close</span>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/busdetails">Bus Schedule & fare</Link></li>
                    <li><Link to="/driverdetails">Driver Details</Link></li>
                    <li><Link to="/buscompanydetails">Bus Company Details</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
