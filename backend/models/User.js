const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // adjust path if needed

const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: {
        type: DataTypes.ENUM('admin', 'commander', 'officer'),
        defaultValue: 'officer',
    },
});

module.exports = User;