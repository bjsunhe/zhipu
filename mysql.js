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
      process VARCHAR,
      projectId VARCHAR,
      sap VARCHAR,
      productSizeLength INT,
      productSizeWidth INT,
      productSizeHeight INT,
      description VARCHAR
      
    )
  `;

  // Execute the create table query
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error('Error creating table:', err);
    } else {
      console.log('Table created successfully');
    }

    // Close the MySQL connection
    connection.end();
  });
  
});

// Perform database operations here

// Close the MySQL connection when done
// connection.end(err => {
//   if (err) {
//     console.error('Error closing MySQL connection:', err);
//   }
//   console.log('MySQL connection closed');
// });
