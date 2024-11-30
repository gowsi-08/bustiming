import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import '../styles/home.css';
import Footer from './Footer';

const BusDetails = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [busDetails, setBusDetails] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/getbusdetails', { source, destination });
            setBusDetails(response.data);
        } catch (error) {
            console.error('Error fetching bus details:', error);
        }
    };

    return (
        <div>
            <Header />
            <main className="main-content">
                <h2>Bus Schedule & Fare</h2>
                <div className="search-bar">
                    <input 
                        type="text" 
                        value={source} 
                        onChange={(e) => setSource(e.target.value)} 
                        placeholder="Search for source..." 
                    />
                    <input
                        type="text" 
                        value={destination} 
                        onChange={(e) => setDestination(e.target.value)} 
                        placeholder="Search for destination..." 
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Bus Number</th>
                            <th>Bus Name</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Stops</th>
                            <th>Arrival Time</th>
                            <th>Departure Time</th>
                            <th>Bus Company Name</th>
                            <th>Driver Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {busDetails.map((bus, index) => (
                            <tr key={index}>
                                <td>{bus.bus_number}</td>
                                <td>{bus.bus_name}</td>
                                <td>{bus.source}</td>
                                <td>{bus.destination}</td>
                                <td>{bus.stops}</td>
                                <td>{bus.arrival_time}</td>
                                <td>{bus.departure_time}</td>
                                <td>{bus.bus_company_name}</td>
                                <td>{bus.driver_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <footer><Footer /></footer>
        </div>
    );
};

export default BusDetails;
