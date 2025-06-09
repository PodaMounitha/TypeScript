/*
1. checkSign(num: number): void
Use an if statement to log whether num is positive.


2. evenOrOdd(num: number): void
Use an if...else to log whether num is even or odd.

3. getGrade(score: number): string
Use an if...else if...else ladder to return a letter grade:

score ≥90 → "A"
score ≥80 → "B"
score ≥70 → "C"
score ≥60 → "D"
otherwise "F"

4. provideFeedback(grade: string): void
Use a switch to log a feedback message for each grade ( "A"... "F" ), with a
default for any unexpected value.
*/

function checkSign(num:number):void{
    if(num<0){
        console.log("The number is negative.");
    }
    else{
        console.log("The number is positive.");
    }
}

function evenOrOdd(num:number):void{
    if(num%2===0){
        console.log("The number is even.");
    }
    else{
        console.log("The number is odd.");
    }
}

function getGrade(score:number):string{
    if(score>=90){
        return "A";
    }
    else if(score>=80){
        return "B";
    }
    else if(score>=70){
        return "C";
    }
    else if(score>=60){
        return "D";
    }
    else{
        return "F";
    }
}

function provideFeedback(grade:string):void{
    switch(grade){
        case "A":
            console.log("Excellent work!");
            break;
        case "B":
            console.log("Good job!");
            break;
        case "C":
            console.log("You passed.");
            break;
        case "D":
            console.log("You barely passed.");
            break;
        case "F":
            console.log("You failed. Better luck next time.");
            break;
        default:
            console.log("Unexpected grade value.");
    }
}

// Example usage
checkSign(5); // The number is positive.
checkSign(-3); // The number is negative.
evenOrOdd(4); // The number is even.
evenOrOdd(7); // The number is odd.
console.log(getGrade(95)); // A
console.log(getGrade(50)); // F
console.log(provideFeedback("A")); // Excellent work!
console.log(provideFeedback("M")); // Unexpected grade value.