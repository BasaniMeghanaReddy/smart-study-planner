require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

const pool = require('./config/db');

app.use(express.json());

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Smart Study Planner API is running!');
});

// ✅ DB test
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection error');
  }
});

// Users routes
app.use('/api/users', require('./routes/userRoutes'));

// Courses routes
app.use('/api/courses', require('./routes/courseRoutes'));

//task routes
app.use('/api/tasks', require('./routes/taskRoutes'));



// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
