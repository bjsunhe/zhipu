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

  // Data to be inserted
  const newData = {
    process: 'dispensing',
    projectId: 'M6000676.040',
    sap: '0804CL0113',
    productSizeLength: 45,
    productSizeWidth: 20,
    productSizeHeight: 30,
    description: 'Description of the data'
  };

  // SQL query to insert data into the table
  const insertQuery = 'INSERT INTO table_bosch SET ?';

  // Execute the insert query
  connection.query(insertQuery, newData, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
    } else {
      console.log('Data inserted successfully');
    }

    // Close the MySQL connection
    connection.end();
  });
});
