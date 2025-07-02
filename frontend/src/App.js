// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import PurchaseAsset from './pages/PurchaseAsset';
import AssignAsset from './pages/AssignAsset';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <
        Router >
        <
        Navbar / >
        <
        div className = "container mt-4" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Dashboard / > }
        /> <
        Route path = "/dashboard"
        element = { < Dashboard / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Register / > }
        /> <
        Route path = "/purchase"
        element = { < PurchaseAsset / > }
        /> <
        Route path = "/assign"
        element = { < AssignAsset / > }
        /> <
        /Routes> <
        /div> <
        /Router>
    );
}

export default App;