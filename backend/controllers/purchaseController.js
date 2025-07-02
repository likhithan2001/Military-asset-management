// backend/controllers/purchaseController.js

const Purchase = require('../models/Purchase');

exports.createPurchase = async(req, res) => {
    try {
        const { assetName, quantity, base, date, amount } = req.body;

        // Back‑end validation
        if (!assetName || !base || !date) {
            return res.status(400).json({ error: 'Asset name, base, and date are required.' });
        }
        if (!Number.isInteger(quantity) || quantity <= 0) {
            return res.status(400).json({ error: 'Quantity must be a positive integer.' });
        }
        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ error: 'Amount must be a positive number.' });
        }

        const purchase = await Purchase.create({
            assetName,
            quantity,
            base,
            date,
            amount,
        });

        res.status(201).json(purchase);
    } catch (err) {
        console.error('❌ Error creating purchase:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllPurchases = async(req, res) => {
    try {
        const purchases = await Purchase.findAll();
        res.json(purchases);
    } catch (err) {
        console.error('❌ Error fetching purchases:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deletePurchase = async(req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Purchase.destroy({ where: { id } });

        if (!deleted) {
            return res.status(404).json({ message: 'Purchase not found' });
        }

        res.status(200).json({ message: 'Purchase deleted successfully' });
    } catch (err) {
        console.error('❌ Error deleting purchase:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};