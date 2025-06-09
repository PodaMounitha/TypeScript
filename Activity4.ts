/*
Declare a variable score with let and assign it a number.
Inside a block (e.g., an if statement), declare another score variable with a
different value and print it.
Declare a constant COUNTRY and assign it your favorite country.
Try to change the value of COUNTRY and observe what happens.
Try to re-declare score in the same block and see the result.
*/

let score : number = 100;
if(score >0){
    score=250;
    console.log("Score inside block: " + score);
}
const country = "India";
// country = "USA"; // This will cause an error because constants cannot be reassigned.
console.log("Country: " + country);

// Trying to re-declare score in the same block will cause an error
//let score = 200; // This will cause an error because score is already declared in the outer scope.
//console.log("Score after re-declaration: " + score); // This line will not execute due to the error above.

