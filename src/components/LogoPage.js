// src/components/LogoPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LogoPage.css'; // Make sure to create the corresponding CSS file for styling

const LogoPage = () => {
    const navigate = useNavigate();

    return (
        <div className="logo-page">
            <div className="logo-container">
                <img src="/OIP.jpg" alt="Timing.in Logo" className="logo-image" />
                <h1>Timing.in</h1>
                <div className="buttons-container">
                    <button onClick={() => navigate('/home')} className="btn passenger-btn">Passenger</button>
                    <button onClick={() => navigate('/admin-login')} className="btn admin-btn">Admin</button>
                </div>
            </div>
        </div>
    );
};

export default LogoPage;
