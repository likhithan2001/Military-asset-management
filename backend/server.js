// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');

// import models BEFORE syncing
require('./models/User');
require('./models/Asset');
require('./models/Purchase'); // <-- ensure you import Purchase model

const assetRoutes = require('./routes/assetRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/assets', assetRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/auth', authRoutes);

// Use alter:true to auto‑update your tables to match your models
sequelize
    .sync({ alter: true })
    .then(() => {
        console.log('✅ Database synced (with alter)');
        app.listen(process.env.PORT || 5000, () => {
            console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch(err => {
        console.error('❌ Sync error:', err);
    });