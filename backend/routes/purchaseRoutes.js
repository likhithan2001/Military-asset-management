const express = require('express');
const router = express.Router();

// Import your controller
const purchaseController = require('../controllers/purchaseController');

// (Optional) auth middleware
// const { verifyToken } = require('../middleware/auth');

// 1. Create a purchase
router.post(
    '/',
    // verifyToken, 
    purchaseController.createPurchase
);

// 2. List all purchases
router.get(
    '/',
    // verifyToken,
    purchaseController.getAllPurchases
);

// 3. Delete a purchase by ID
router.delete(
    '/:id',
    // verifyToken,
    purchaseController.deletePurchase
);

module.exports = router;