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

## Dependencies

- **Express**: Web application framework for Node.js.
- **Nunjucks**: Templating engine for JavaScript.
- **@babel/cli**: Command-line interface for Babel, used for JavaScript transpilation.
- **@babel/core**: Core functionality of Babel, used for JavaScript transpilation.
- **@babel/node**: Babel Node.js API, used for running Node.js applications with Babel.
- **@babel/preset-env**: Babel preset for compiling JavaScript to a specific version of ECMAScript.
- **@babel/register**: Babel register hook, used for requiring Babel transpiled files in Node.js.
- **govuk-frontend**: Government Design System (GOV.UK Frontend) for styling web applications.

## Development Dependencies

- **Nodemon**: Utility that monitors for changes in files and automatically restarts the server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
