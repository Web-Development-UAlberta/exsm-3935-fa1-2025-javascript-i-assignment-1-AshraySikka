# Name Editor and Remainder Calculator
This JavaScript prgram interacts with the user through the browser console using the input and the output function.
It takes a name and two numbers as input, edits the name by replacing all lowercase 'o' characters with 'a', and calculates the remainder of the two numbers.

#### Features
The main features of my code are:
    1. Accepts user input for name and number
    2. Performs string manipulation using regular expression
    3. Performs arithmatic operation - modulous 
    4. Displays the results in the browser

#### How It Works
My code works in 3 steps:
    1. Takes input from the user
    2. Processes the data (concatination, replacement, modulous)
    3. Outputs the result using 'output()' function

#### Example Output
    Please enter your first name: Bob
    Please enter your last name: SoOonder

    The name Bob SoOonder edited after replacing character 'o' with 'a' is: Bab SaOander
    Please enter a number larger than 10: 78
    Please enter a number smaller than 10: 5

    The remainder of 78/5 is: 3

#### Functions Used
The key functions used my program are:
    1. input() - captures user input
    2. output() - displays text output
    3. String() / Number() - type conversions 
    4. replace() - string manipulation
    5. % - modulous operation

#### How to Run
To run my code, complete the following steps:
    1. Open the HTML file 'index.html' in your project directory
    2. Open the file in your browser (double-click or right-click → Open With → Browser)

#### Notes
I have made a few assumptions for my code:
    1. The user will enter correct first name and last name without extra spaces
    2. The user will enter a number greater and less than 10 when prompted respectively
