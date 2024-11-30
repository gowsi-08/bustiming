import React, { useState } from 'react';
import axios from 'axios';
import '../styles/home.css';
import Header from './Header';
import Footer from './Footer';

const DriverDetails = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/passenger/driverdetails?search=${searchTerm}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching driver details:', error);
        }
    };

    return (
        <div>
            <Header />
            <main className="main-content">
                <section>
                    <h2>Driver Details</h2>
                    <div className="search-bar">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by Driver Name or License Number"
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div className="driver-list">
                        {searchResults.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Driver Name</th>
                                        <th>License Number</th>
                                        <th>Contact</th>
                                        <th>Company Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchResults.map((driver) => (
                                        <tr key={driver.id}>
                                            <td>{driver.driver_name}</td>
                                            <td>{driver.license_number}</td>
                                            <td>{driver.contact_number}</td>
                                            <td>{driver.company_name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No results found.</p>
                        )}
                    </div>
                </section>
            </main>
            <footer><Footer /></footer>
        </div>
    );
};

export default DriverDetails;
