const express = require('express');
const router = express.Router();
const courseController = require('./course.controller')
// Get all
router.get('/', courseController.get)

// Get id
router.get('/:courseId', courseController.getID)

// Post 
router.post('/', courseController.create)

// Update
router.put('/:courseId', courseController.update)

// Delete 
router.delete('/:courseId', courseController.deleteCourse)

module.exports = router
