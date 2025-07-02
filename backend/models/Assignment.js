// models/Assignment.js
const Assignment = sequelize.define('Assignment', {
    assetName: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    personnel: { type: DataTypes.STRING, allowNull: false },
    base: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Assignment;