const express = require('express');
const app = express();
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myst',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Run a query to retrieve data
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    return res.json(results);
  });
});

// Catch-all handler for all other requests
app.use('*', (req, res) => {
  res.json({ msg: 'no route handler found' }).end();
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
