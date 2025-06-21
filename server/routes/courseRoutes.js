const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

router.get('/', coursesController.getAllCourses);
router.post('/', coursesController.createCourse);
router.delete('/:id', coursesController.deleteCourse);

module.exports = router;
