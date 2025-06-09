/*
Create a function recordAnswer that takes a question ID and an answer of any type, and stores it in an object.
Add at least three answers: a string, a number, and an array.
Print all recorded answers.
*/

function recordAnswer(questionId : any, answer : any){
    const answers: { [key: string]:any }={};
    answers[questionId] = answer;
    console.log("Recorded Answer for Question ID " + questionId + ": " + answer);
    return answers;
}

const answers = {};
recordAnswer("Q1", "42");
recordAnswer("Q2", 3.14);
recordAnswer("Q3", ["apple", "banana", "cherry"]);
console.log("All Recorded Answers: ", answers);
