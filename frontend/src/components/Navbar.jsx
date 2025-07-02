import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">🎖️ Military Assets</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">📊 Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/purchase" className="nav-link">➕ Purchase</Link>
            </li>
            <li className="nav-item">
              <Link to="/assign" className="nav-link">📤 Assign</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">🔐 Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">📝 Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
