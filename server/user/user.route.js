const express = require('express');
const router = express.Router();
const userController = require('./user.controller')
const authValidation = require('../helpers/validation')
const { authenticateJWT } = require('../Middleware/auth');

// Get all
router.get('/', userController.get)

// Get id
router.get('/:userId', authenticateJWT, userController.getID)

// login
router.post('/login', authValidation.login, userController.login)

// create 
router.post('/create', authValidation.create, userController.create)

// Update
router.put('/:userId', authenticateJWT, userController.update)

// Delete 
router.delete('/:userId', authenticateJWT, userController.deleteUser)

module.exports = router