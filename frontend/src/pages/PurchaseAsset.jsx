// src/pages/PurchaseAsset.jsx

import React, { useState } from 'react';
import axios from '../services/api';       // axios instance with baseURL: http://localhost:5000/api
import 'bootstrap/dist/css/bootstrap.min.css';

const PurchaseAsset = () => {
  const [form, setForm] = useState({
    assetName: '',
    quantity: '',
    base: '',
    date: '',
    amount: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // parse numbers
    const quantityNum = parseInt(form.quantity, 10);
    const amountNum = parseFloat(form.amount);

    // front-end validation
    if (!form.assetName.trim() || !form.base.trim() || !form.date) {
      return alert('❌ Asset name, base, and date are required.');
    }
    if (isNaN(quantityNum) || quantityNum <= 0) {
      return alert('❌ Quantity must be a positive integer.');
    }
    if (isNaN(amountNum) || amountNum <= 0) {
      return alert('❌ Expenditure amount must be greater than ₹0.');
    }

    try {
      console.log('📤 Sending POST /purchases with:', {
        assetName: form.assetName,
        quantity: quantityNum,
        base: form.base,
        date: form.date,
        amount: amountNum,
      });

      await axios.post('/purchases', {
        assetName: form.assetName,
        quantity: quantityNum,
        base: form.base,
        date: form.date,
        amount: amountNum,
      });

      alert('✅ Purchase recorded successfully');
      setForm({ assetName: '', quantity: '', base: '', date: '', amount: '' });
    } catch (err) {
      console.error('🔥 Full Axios Error:', err);

      if (err.response) {
        console.error('➡️ Response data:', err.response.data);
        console.error('➡️ Status code:', err.response.status);
        alert(`❌ Failed to record purchase: ${err.response.data.error || err.response.data.message}`);
      } else if (err.request) {
        console.error('➡️ No response received, request was:', err.request);
        alert('❌ No response from server (check network error)');
      } else {
        console.error('➡️ Error setting up request:', err.message);
        alert(`❌ Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4 text-primary">📦 Record New Purchase</h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Asset Name */}
            <div className="col-md-6">
              <label className="form-label">Asset Name</label>
              <input
                type="text"
                name="assetName"
                className="form-control"
                value={form.assetName}
                onChange={handleChange}
                placeholder="e.g. Drone"
                required
              />
            </div>

            {/* Quantity */}
            <div className="col-md-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                name="quantity"
                className="form-control"
                value={form.quantity}
                onChange={handleChange}
                placeholder="e.g. 5"
                min="1"
                required
              />
            </div>

            {/* Base */}
            <div className="col-md-3">
              <label className="form-label">Base</label>
              <input
                type="text"
                name="base"
                className="form-control"
                value={form.base}
                onChange={handleChange}
                placeholder="e.g. Alpha"
                required
              />
            </div>

            {/* Purchase Date */}
            <div className="col-md-6">
              <label className="form-label">Purchase Date</label>
              <input
                type="date"
                name="date"
                className="form-control"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Expenditure Amount */}
            <div className="col-md-6">
              <label className="form-label">Expenditure Amount (₹)</label>
              <input
                type="number"
                name="amount"
                className="form-control"
                value={form.amount}
                onChange={handleChange}
                placeholder="e.g. 5000"
                min="1"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="text-end mt-4">
            <button type="submit" className="btn btn-success px-4">
              💾 Save Purchase
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseAsset;
