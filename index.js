const mysql = require('mysql2');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a connection pool
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jawad@123',
  database: 'food',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to take user input for SQL query
function getUserInput() {
  rl.question('Enter your SQL query: ', (query) => {
    executeQuery(query);
  });
}

// Function to execute the SQL query
function executeQuery(query) {
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
    } else {
      console.log('Query results:', results);
    }

    rl.question('Do you want to enter another query? (yes/no): ', (answer) => {
      if (answer.toLowerCase() === 'yes') {
        getUserInput(); // Ask for another query
      } else {
        // Close the connection and exit
        connection.end((err) => {
          if (err) {
            console.error('Error closing the connection:', err);
          } else {
            console.log('Connection closed');
          }
          rl.close();
        });
      }
    });
  });
}

// Start by asking for the first query
getUserInput();
