/*
Change the message variable to your own name and print a personalized greetinng.
Try declaring a variable for your age and print it with a message.
What happens if you try to assign a number to a variable declared as a string?
*/

let message : string = "Hey There, How are you?";
message = "Hello, Poda Mounitha";
console.log(message);

let age : number = 19;
console.log("My age is :" + age);

// If I try to assign a number to a variable declared as a string, it will throw an error.
//Hence this is not possible in TypeScript

let Myname :  string = "Poda Mounitha";
// Myname = 19; // This will cause a TypeScript error: Type 'number' is not assignable to type 'string'.
