// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Create a curry function
// What can your curried function do?

const multiply = (num1) => (num2) => num1 * num2

console.log(multiply(5)(4))
