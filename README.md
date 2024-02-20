# MWC Spike

## Description

MWC Spike is a Node.js web application built to spike the integration of the MHRA Medicines Website Checker with the Government Design System (GOV.UK Frontend), while also exploring the feasibility of using Nunjucks and Express with Node.js. It allows users to input a medicines website link.


## Installation

To install MWC Spike, make sure you have Node.js installed on your machine.

### Using npm

```bash
npm install
```

### Using Yarn

```bash
yarn install
```

## Usage

To start the application, run the following command:

```bash
npm start
```

or

```bash
yarn start
```

This will start the server using Nodemon, which will automatically restart the server when changes are detected in `.js` or `.njk` files.

Once the server is running, you can access the application in your web browser at `http://localhost:3000`.

## Database Setup

MWC Spike requires a PostgreSQL database to store data. Follow these steps to set up the database connection:

### 1. Install PostgreSQL

If you haven't already installed PostgreSQL, you can download it from the [official PostgreSQL website](https://www.postgresql.org/download/) and follow the installation instructions for your operating system.

### 2. Create a Database

Once PostgreSQL is installed, create a new database. You can do this using the `createdb` command in your terminal:

```bash
createdb MHRA
```

Replace `MHRA` with the desired name of your database.

### 3. Configure Database Connection

Create a file named `connection.js` in the root directory of your project. This file will contain the configuration for connecting to your PostgreSQL database. You can set up the connection configuration using environment variables or any other method that suits your project's needs. Here's an example of how you can structure the `connection.js` file:

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use environment variable for connection string
});

module.exports = pool;

```

Modify the connection configuration according to your requirements, and consider using environment variables to securely manage sensitive information like database credentials.

### 4. Run the Application
Once you've set up the database connection configuration, you can run the MWC Spike application using the provided installation and usage instructions in this README.


## Dependencies

- **Express**: Web application framework for Node.js.
- **Nunjucks**: Templating engine for JavaScript.
- **@babel/cli**: Command-line interface for Babel, used for JavaScript transpilation.
- **@babel/core**: Core functionality of Babel, used for JavaScript transpilation.
- **@babel/node**: Babel Node.js API, used for running Node.js applications with Babel.
- **@babel/preset-env**: Babel preset for compiling JavaScript to a specific version of ECMAScript.
- **@babel/register**: Babel register hook, used for requiring Babel transpiled files in Node.js.
- **govuk-frontend**: Government Design System (GOV.UK Frontend) for styling web applications.
- **pg**: PostgreSQL client for Node.js.


## Development Dependencies

- **Nodemon**: Utility that monitors for changes in files and automatically restarts the server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
