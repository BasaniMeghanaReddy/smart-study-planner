const express = require('express');
const router = express.Router();

// Importing the controller
const userController = require('../controllers/userController');

// Define routes:

// GET /api/users -> run getAllUsers()
router.get('/', userController.getAllUsers);

// POST /api/users -> run createUser()
router.post('/', userController.createUser);

// DELETE /api/users/:id -> run deleteUser()
router.delete('/:id', userController.deleteUser);

module.exports = router;
