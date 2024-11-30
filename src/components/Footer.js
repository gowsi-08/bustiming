// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Footer = () => {
    return (
        <div>
        <footer>
                    <div className="footer-container">
                        <div className="footer-section">
                            <h3>About Us</h3>
                            <p>Timing.in is dedicated to providing accurate and up-to-date bus schedules and driver details to ensure a smooth journey for all passengers.</p>
                        </div>
                        <div className="footer-section">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/busdetails">Bus Schedule & fare</Link></li>
                                <li><Link to="/driverdetails">Driver Details</Link></li>
                                <li><Link to="/buscompanydetails">Bus Company Details</Link></li>
                                <li><Link to="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Contact Us</h3>
                            <p>Email: support@timing.in</p>
                            <p>Phone: +0452 234567</p>
                            <p>Address: 123 Main Street, Virudhunagar, Tamilnadu</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Timing.in. All Rights Reserved.</p>
                    </div>
                </footer>
                </div>
    );
};

export default Footer;
