const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cool1234567890-',
  database: 'bmg'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  // SQL query to select all data from the table
  const selectQuery = 'SELECT * FROM table_bosch';

  // Execute the select query
  connection.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error selecting data:', err);
    } else {
      console.log('Selected data:');
      console.log(results); // Log the query results
    }

    // Close the MySQL connection
    connection.end();
  });
});
