const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const { verifyToken } = require('../middleware/auth');

router.post('/', verifyToken, assignmentController.createAssignment);
router.get('/', verifyToken, assignmentController.getAllAssignments);

module.exports = router;