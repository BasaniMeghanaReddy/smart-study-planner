// 1️⃣ Import your DB connection
const pool = require('../config/db'); 
// This connects to your Postgres DB using settings in .env

//--------------------------------------------

// 2️⃣ GET all users 
// Route: GET /api/users
exports.getAllUsers = async (req, res) => {
  try {
    // Runs the SQL query: SELECT * FROM users;
    const result = await pool.query('SELECT * FROM users');
    // Send back the rows as JSON
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching users');
  }
};

//--------------------------------------------

// 3️⃣ POST a new user
// Route: POST /api/users
exports.createUser = async (req, res) => {
  // Read name, email, password from the incoming JSON body
  const { name, email, password } = req.body;
  try {
    // Run SQL: INSERT INTO users ... RETURNING * gives back the new row
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    // Send back the new user as JSON, status 201 = created
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
};

//--------------------------------------------

// 4️⃣ DELETE a user by ID
// Route: DELETE /api/users/:id
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    // If no rows were deleted, tell the client
    if (result.rowCount === 0) {
      return res.status(404).send(`User ${id} not found`);
    }
    res.send(`User ${id} deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting user');
  }
};

