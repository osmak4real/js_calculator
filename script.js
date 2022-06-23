// program for a simple calculator



// take the operand input
const input1 = parseFloat(prompt('Enter first number: '));

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const input2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = input1 + input2;
}
else if (operator == '-') {
    result = input1 - input2;
}
else if (operator == '*') {
    result = input1 * input2;
}
else {
    result = input1 / input2;
}

// display the result
alert(`${input1} ${operator} ${input2} = ${result}`);