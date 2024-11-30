import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/manageDetails.css';

const ManageBusDetails = () => {
    const [busDetails, setBusDetails] = useState([]);
    const [form, setForm] = useState({
        bus_number: '',
        bus_name: '',
        source: '',
        destination: '',
        stops: '',
        arrival_time: '',
        departure_time: '',
        bus_company_name: '',
        driver_name: '',
    });
    const [editingBusNumber, setEditingBusNumber] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchBusDetails();
    }, []);

    const fetchBusDetails = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/busdetails');
            setBusDetails(response.data);
        } catch (error) {
            console.error('Error fetching bus details:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingBusNumber) {
                await axios.put(`http://localhost:5000/api/admin/busdetails/${editingBusNumber}`, form);
                console.log(`Updating bus with number: ${editingBusNumber}`);
            } else {
                await axios.post('http://localhost:5000/api/admin/busdetails', form);
                console.log('Adding new bus');
            }
            fetchBusDetails();
            setForm({
                bus_number: '',
                bus_name: '',
                source: '',
                destination: '',
                stops: '',
                arrival_time: '',
                departure_time: '',
                bus_company_name: '',
                driver_name: '',
            });
            setEditingBusNumber(null);
            setErrorMessage('');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage(error.response.data);
            } else {
                console.error('Error saving bus detail:', error);
            }
        }
    };

    const handleEdit = (bus) => {
        setForm({
            bus_number: bus.bus_number,
            bus_name: bus.bus_name,
            source: bus.source,
            destination: bus.destination,
            stops: bus.stops,
            arrival_time: bus.arrival_time,
            departure_time: bus.departure_time,
            bus_company_name: bus.bus_company_name,
            driver_name: bus.driver_name,
        });
        setEditingBusNumber(bus.bus_number);
    };

    const handleDelete = async (bus_number) => {
        try {
            await axios.delete(`http://localhost:5000/api/admin/busdetails/${bus_number}`);
            console.log(`Deleting bus with number: ${bus_number}`);
            fetchBusDetails();
        } catch (error) {
            console.error('Error deleting bus detail:', error);
        }
    };

    return (
        <div className="manage-details">
            <h2>Manage Bus Details</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Bus Number"
                    value={form.bus_number}
                    onChange={(e) => setForm({ ...form, bus_number: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Bus Name"
                    value={form.bus_name}
                    onChange={(e) => setForm({ ...form, bus_name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Source"
                    value={form.source}
                    onChange={(e) => setForm({ ...form, source: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Destination"
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Stops"
                    value={form.stops}
                    onChange={(e) => setForm({ ...form, stops: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Arrival Time"
                    value={form.arrival_time}
                    onChange={(e) => setForm({ ...form, arrival_time: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Departure Time"
                    value={form.departure_time}
                    onChange={(e) => setForm({ ...form, departure_time: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Bus Company Name"
                    value={form.bus_company_name}
                    onChange={(e) => setForm({ ...form, bus_company_name: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Driver Name"
                    value={form.driver_name}
                    onChange={(e) => setForm({ ...form, driver_name: e.target.value })}
                    required
                />
                <button type="submit">{editingBusNumber ? 'Update' : 'Add'} Bus Detail</button>
            </form>
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {busDetails.map((bus) => (
                        <tr key={bus.bus_number}>
                            <td>{bus.bus_number}</td>
                            <td>{bus.bus_name}</td>
                            <td>{bus.source}</td>
                            <td>{bus.destination}</td>
                            <td>{bus.stops}</td>
                            <td>{bus.arrival_time}</td>
                            <td>{bus.departure_time}</td>
                            <td>{bus.bus_company_name}</td>
                            <td>{bus.driver_name}</td>
                            <td>
                                <button onClick={() => handleEdit(bus)}>Edit</button>
                                <button onClick={() => handleDelete(bus.bus_number)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageBusDetails;
