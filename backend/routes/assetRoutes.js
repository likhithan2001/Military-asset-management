const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');
const { verifyToken } = require('../middleware/auth');

router.post('/', verifyToken, assetController.createAsset);
router.post('/bulk', verifyToken, assetController.createMultipleAssets);
router.get('/', verifyToken, assetController.getAssets);
router.put('/:id', verifyToken, assetController.updateAsset);
router.delete('/:id', verifyToken, assetController.deleteAsset);

module.exports = router;