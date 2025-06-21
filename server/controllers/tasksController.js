const pool = require('../config/db');

// ✅ GET all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching tasks');
  }
};

// ✅ POST create task
exports.createTask = async (req, res) => {
  const { task_name, due_date, course_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tasks (task_name, due_date, course_id) VALUES ($1, $2, $3) RETURNING *',
      [task_name, due_date, course_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating task');
  }
};

// ✅ DELETE task by id
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).send(`Task ${id} not found`);
    }
    res.send(`Task ${id} deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting task');
  }
};
