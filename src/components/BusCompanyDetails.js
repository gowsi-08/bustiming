import React, { useState } from 'react';
import axios from 'axios';
import '../styles/home.css';
import Header from './Header';
import Footer from './Footer';

const BusCompanyDetails = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const fetchCompanyDetails = async () => {
        if (searchTerm.trim() === '') {
            setSearchResults([]);
            return;
        }
    
        try {
            console.log('Searching for:', searchTerm); // Debugging line
            const response = await axios.get(`http://localhost:5000/api/companydetails?search=${searchTerm}`);
            console.log('Search results:', response.data); // Debugging line
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching company details:', error);
            setSearchResults([]);
        }
    };
    
    const handleSearch = (e) => {
        e.preventDefault();
        fetchCompanyDetails();
    };

    return (
        <div>
            <Header />
            <main className="main-content">
                <section>
                    <h2>Bus Company Details</h2>
                    <div className="search-bar">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by Company Name or Contact"
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div className="company-list">
                        {searchResults.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Contact</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchResults.map((company) => (
                                        <tr key={company.id}>
                                            <td>{company.company_name}</td>
                                            <td>{company.contact}</td>
                                            <td>{company.address}</td>
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

export default BusCompanyDetails;
