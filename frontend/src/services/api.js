// src/services/api.js
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000/api', // <-- your backend URL + /api
});