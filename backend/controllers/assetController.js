const Asset = require('../models/Asset');

// controllers/assetController.js


exports.createAsset = async(req, res) => {
    try {
        const asset = await Asset.create(req.body); // ← ✅ this is the correct line
        res.status(201).json(asset);
    } catch (error) {
        console.error("🔥 Full error:", error); // Optional debugging
        res.status(500).json({ error: error.message });
    }
};

exports.createMultipleAssets = async(req, res) => {
    try {
        const assets = await Asset.bulkCreate(req.body); // Accepts array
        res.status(201).json(assets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAssets = async(req, res) => {
    try {
        const assets = await Asset.findAll();
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateAsset = async(req, res) => {
    try {
        const { id } = req.params;
        await Asset.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Asset updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteAsset = async(req, res) => {
    try {
        const { id } = req.params;
        await Asset.destroy({ where: { id } });
        res.status(200).json({ message: 'Asset deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};