const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cool1234567890-',
  database: 'bosch'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Perform database operations here

// Close the MySQL connection when done
connection.end(err => {
  if (err) {
    console.error('Error closing MySQL connection:', err);
  }
  console.log('MySQL connection closed');
});
