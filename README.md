<<<<<<< HEAD
# String Calculator TDD Kata

This project is a simple String Calculator that follows the Test-Driven Development (TDD) principles. It can handle various types of input and perform calculations based on the provided numbers.

## Features

- **Empty String:** Returns 0 for an empty string.
- **Single Number:** Returns the number itself when provided as a string.
- **Two Numbers:** Returns the sum of two comma-separated numbers.
- **Multiple Numbers:** Supports an unknown amount of numbers.
- **New Line Delimiters:** Handles new lines as delimiters.
- **Custom Delimiters:** Allows changing the delimiter using a specific format.
- **Negative Numbers:** Throws an exception for negative numbers with a detailed message.
- **Numbers Greater Than 1000:** Ignores numbers greater than 1000.
- **Multiple Delimiters Support:** Supports multiple delimiters of any length.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vaibhavnsalve/string-calculator.git
   cd string-calculator


2. Install dependencies:

Ensure you have Node.js and npm installed. Run the following command in the project directory:

npm install

3. Running the Application
To start the application in development mode, use the following command:

npm start

Open http://localhost:3000 to view it in your browser.

Running Tests
To run the tests for this application, use the following command:

npm test

This will launch the test runner in interactive watch mode.

Code Structure
The main logic is located in the src directory:

StringCalculator.js: Contains the implementation of the String Calculator logic.
StringCalculator.test.js: Contains the test cases for the String Calculator.
Usage
The main function add can be called with a string of numbers, which will return their sum based on the defined rules. Here are some examples:

import { add } from './StringCalculator';

console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,2")); // Output: 3
console.log(add("1\n2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3

Contributing
If you'd like to contribute to this project, please fork the repository and create a pull request. We appreciate any feedback or suggestions!

License
This project is licensed under the MIT License.


You can copy and paste this entire text into a file named `README.md` in your project directory. Let me know if you need any modifications!
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 961b54a (Initial commit)
