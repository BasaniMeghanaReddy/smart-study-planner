const pool = require('../config/db');

// GET all courses
exports.getAllCourses = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching courses');
  }
};

// POST new course
exports.createCourse = async (req, res) => {
  const { course_name, description, user_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO courses (course_name, description, user_id) VALUES ($1, $2, $3) RETURNING *',
      [course_name, description, user_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating course');
  }
};

// DELETE course by ID
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM courses WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).send(`Course ${id} not found`);
    }
    res.send(`Course ${id} deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting course');
  }
};
