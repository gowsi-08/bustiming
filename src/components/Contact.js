import React from 'react';
import '../styles/home.css';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
            <Header/>
        <main className="main-content">
            <section>
                <h2>Contact Us</h2>
                <p>Email: support@timing.in</p>
                <p>Phone: +0452 234567</p>
                <p>Address: 123 Main Street, Virudhunagar, Tamilnadu</p>
            </section>
        </main>
        <footer><Footer /></footer>
        </div>
    );
};

export default Contact;
