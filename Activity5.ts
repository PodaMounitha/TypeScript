// Global object to store all answers
const answers: { [key: string]: any } = {};

// Function to record answers
function recordAnswer(questionId: string, answer: any): void {
    answers[questionId] = answer;
    console.log("Recorded Answer for Question ID " + questionId + ": ", answer);
}

// Add at least three answers
recordAnswer("Q1", "42"); // string
recordAnswer("Q2", 3.14); // number
recordAnswer("Q3", ["apple", "banana", "cherry"]); // array

// Print all answers
console.log("All Recorded Answers: ", answers);
