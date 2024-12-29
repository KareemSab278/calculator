JavaScript Calculator

A simple JavaScript calculator that performs basic arithmetic operations. This project dynamically updates the calculation result and provides an interactive interface for users to input numbers and operators.

Features

Dynamic Calculations: Updates the displayed result dynamically after each operation.

Reusable Functions: Uses JavaScript functions to handle arithmetic operations.

Clean Display: Results are shown clearly using HTML updates.

Interactive UI: Users can input numbers and operators through buttons.

Technologies Used

JavaScript: Core logic for calculations.

HTML: Structure of the calculator interface.

CSS: Basic styling for the calculator.

Installation

Clone the repository:

git clone https://github.com/your-username/js-calculator.git

Navigate to the project directory:

cd js-calculator

Open the index.html file in your browser:

open index.html

(or simply double-click the file)

Usage

Enter numbers by clicking the number buttons.

Select an operator (e.g., +, -, *, /).

Press the equals button (=) to see the result.

Use the clear button (C) to reset the calculator.

Code Overview

Key Functionalities

Dynamic Updates:
The calculator replaces the array with the latest calculation result after every button click.

calcDisplay.innerHTML = `<h1> TOTAL: ${StringOperationTotal}</h1>`;

Event Handling:
The calculator uses event listeners to handle button clicks.

Reusable Functions:
Operations are performed using dynamically determined functions, allowing for flexibility and scalability.

Future Improvements

Add support for more advanced operations (e.g., square root, exponentiation).

Enhance styling with a modern CSS framework.

Make it mobile-responsive.

Add error handling for edge cases (e.g., division by zero).
