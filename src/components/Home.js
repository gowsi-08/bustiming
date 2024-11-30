import React from 'react';
import '../styles/home.css';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
        <Header/>
        <main className="main-content">
            <section>
                <h1>Welcome to Timing.in</h1>
                <p>We provide accurate and up-to-date bus schedules and driver details to ensure a smooth journey for all passengers.</p>
            </section>
        </main>
        <footer><Footer /></footer>
        </div>
    );
};

export default Home;
