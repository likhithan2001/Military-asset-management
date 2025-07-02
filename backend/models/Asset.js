// models/Asset.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { verifyToken, restrictTo } = require('../middleware/auth');


const Asset = sequelize.define('Asset', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    base: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'active',
    },
});

module.exports = Asset;