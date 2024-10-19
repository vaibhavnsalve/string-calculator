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
