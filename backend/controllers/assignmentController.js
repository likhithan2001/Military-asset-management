const Assignment = require('../models/Assignment');

exports.createAssignment = async(req, res) => {
    try {
        const { assetName, quantity, personnel, base, date } = req.body;
        const assignment = await Assignment.create({ assetName, quantity, personnel, base, date });
        res.status(201).json(assignment);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create assignment' });
    }
};

exports.getAllAssignments = async(req, res) => {
    try {
        const assignments = await Assignment.findAll();
        res.json(assignments);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch assignments' });
    }
};