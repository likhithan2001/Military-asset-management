import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'officer'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', formData);
      alert('✅ Registered successfully! Please log in.');
      navigate('/login');
    } catch (err) {
      console.error(err);
      alert('❌ Registration failed. Email may already be in use.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow border-0">
        <div className="card-header bg-dark text-white">
          <h4>🔐 Register New User</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input type="text" name="name" className="form-control" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" name="email" className="form-control" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" name="password" className="form-control" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Role</label>
              <select name="role" className="form-select" onChange={handleChange}>
                <option value="admin">Admin</option>
                <option value="commander">Commander</option>
                <option value="officer">Officer</option>
              </select>
            </div>
            <button className="btn btn-primary" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
