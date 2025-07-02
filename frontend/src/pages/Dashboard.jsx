// src/pages/Dashboard.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash, FaPlus, FaArrowRight } from 'react-icons/fa';

const Dashboard = () => {
  const [purchases, setPurchases] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);

  const fetchData = async () => {
    try {
      const res = await axios.get('/purchases');
      const data = res.data;

      // compute totals
      let quantity = 0;
      let expenditure = 0;
      data.forEach(item => {
        quantity += Number(item.quantity) || 0;
        expenditure += parseFloat(item.amount) || 0;
      });

      setPurchases(data);
      setTotalQuantity(quantity);
      setTotalExpenditure(expenditure);
    } catch (err) {
      console.error('❌ Failed to fetch data', err);
      alert('❌ Failed to fetch data');
    }
  };

  const deletePurchase = async (id) => {
    if (!window.confirm('Are you sure you want to delete this purchase?')) return;
    try {
      await axios.delete(`/purchases/${id}`);
      alert('✅ Purchase deleted');
      fetchData();
    } catch (err) {
      console.error('❌ Failed to delete purchase', err);
      alert('❌ Failed to delete purchase');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-5">
      {/* Header + Actions */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">📊 Military Asset Dashboard</h2>
        <div className="d-flex gap-2">
          <Link to="/login" className="btn btn-outline-primary">🔐 Login</Link>
          <Link to="/register" className="btn btn-outline-secondary">📝 Register</Link>
          <Link to="/purchase" className="btn btn-success">
            <FaPlus className="me-1"/> Add Purchase
          </Link>
          <Link to="/assign" className="btn btn-warning text-dark">
            <FaArrowRight className="me-1"/> Assign Asset
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card bg-info text-white shadow-sm">
            <div className="card-body text-center">
              <h5>Total Quantity Purchased</h5>
              <h3 className="fw-bold">{totalQuantity}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-3 mt-md-0">
          <div className="card bg-warning text-dark shadow-sm">
            <div className="card-body text-center">
              <h5>Total Expenditure (₹)</h5>
              <h3 className="fw-bold">₹{totalExpenditure.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Table */}
      {purchases.length === 0 ? (
        <div className="alert alert-warning text-center">
          No purchase records found.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow-sm align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>Asset Name</th>
                <th>Quantity</th>
                <th>Base</th>
                <th>Date</th>
                <th>Expenditure (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map(item => (
                <tr key={item.id}>
                  <td>{item.assetName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.base}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>₹{parseFloat(item.amount).toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => deletePurchase(item.id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      <FaTrash className="me-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
