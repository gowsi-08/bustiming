import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/adminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="admin-links">
                <Link to="/admin/busdetails">Manage Bus Details</Link>
                <Link to="/admin/companydetails">Manage Company Details</Link>
                <Link to="/admin/driverdetails">Manage Driver Details</Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
