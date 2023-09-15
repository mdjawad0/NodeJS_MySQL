# NodeJS MySQL Query Executor

The **NodeJS MySQL Query Executor** is a simple Node.js command-line application that allows users to interactively execute SQL queries on a MySQL database. This project leverages the `mysql2` library for MySQL database connectivity and the `readline` library for user input.

## Features

- Connect to a MySQL database using your specified credentials.
- Execute SQL queries interactively.
- Receive query results and error messages in real-time.
- Easily exit the application when you're done querying.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your system.
- A running MySQL database with the required database (in this case, 'food') already set up.

## Installation

1. Clone this repository to your local machine:

`git clone https://github.com/your-username/NodeJS_MySQL.git`


2. Navigate to the project directory:

`cd NodeJS_MySQL`


3. Install the project dependencies:

`npm install`


## Usage

1. Configure the MySQL database connection by modifying the following lines in `index.js`:

```javascript
const connection = mysql.createConnection({
  host: 'localhost',       // Your MySQL host
  user: 'root',            // Your MySQL username
  password: 'YourPassword', // Your MySQL password
  database: 'food',        // Your MySQL database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

Run the application:

`node index.js`

You will be prompted to enter your SQL query. Type your query and press Enter.

The application will execute the query and display the results or any error messages.

After each query execution, you will be asked if you want to enter another query. Type yes to continue or no to exit.

When you are done, the application will automatically close the MySQL connection and exit.

Example

Here's an example of how to use the NodeJS MySQL Query Executor:

Run the application using node index.js.
Enter SELECT * FROM users; as your SQL query.
The application will display the query results.
You can choose to enter another query or exit the application.

Author
`Mohammed Jawad Pasha`

Acknowledgments
Thanks to the creators of the mysql2 and readline libraries for making this project possible.


