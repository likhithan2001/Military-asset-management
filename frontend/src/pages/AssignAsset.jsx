import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const AddPurchase = () => {
  const [purchases, setPurchases] = useState([]);

  const fetchPurchases = async () => {
    try {
      const res = await axios.get('/purchases');
      setPurchases(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch purchases');
    }
  };

  useEffect(() => {
    fetchPurchases();
  }, []);

  return (
    <div className="container mt-4">
      <h3>📦 Purchase Records</h3>
      {purchases.length === 0 ? (
        <p>No purchases found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Quantity</th>
              <th>Base</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((p, i) => (
              <tr key={i}>
                <td>{p.assetName}</td>
                <td>{p.quantity}</td>
                <td>{p.base}</td>
                <td>{new Date(p.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AddPurchase;
