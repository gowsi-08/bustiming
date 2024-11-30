import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import LogoPage from './components/LogoPage';
import BusDetails from './components/BusDetails';
import DriverDetails from './components/DriverDetails';
import BusCompanyDetails from './components/BusCompanyDetails';
import Contact from './components/Contact';
import AdminDashboard from './components/AdminDashboard';
import ManageDriverDetails from './components/ManageDriverDetails';
import ManageBusDetails from './components/ManageBusDetails';
import ManageCompanyDetails from './components/ManageCompanyDetail';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogoPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/busdetails" element={<BusDetails />} />
                <Route path="/driverdetails" element={<DriverDetails />} />
                <Route path="/buscompanydetails" element={<BusCompanyDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/busdetails" element={<ManageBusDetails />} />
                <Route path="/admin/companydetails" element={<ManageCompanyDetails />} />
                <Route path="/admin/driverdetails" element={<ManageDriverDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
