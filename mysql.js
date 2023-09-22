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

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS table_bosch (
      process VARCHAR(255),
      projectId VARCHAR(255),
      sap VARCHAR(255),
      productSizeLength INT,
      productSizeWidth INT,
      productSizeHeight INT,
      description VARCHAR(255)
    )
  `;

  // Execute the create table query
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Table created successfully');
    }

    // Close the MySQL connection when done with table creation
    connection.end();
  });
});

// Perform other database operations here

// Close the MySQL connection when done with all operations
// connection.end(err => {
//   if (err) {
//     console.error('Error closing MySQL connection:', err);
//   }
//   console.log('MySQL connection closed');
// });
