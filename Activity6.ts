/*
Create a function processTransaction that takes an amount (number), a description (string), and a flag isCredit (boolean).
If the amount is negative, the function should throw an error (never).

If the description is missing, use undefined and handle it in the function.

Print a summary of the transaction.
*/
function processTransaction(amount: number, isCredit: boolean, description?: string): void {
    if(amount<0){
        throw new Error("Amount can't be negative");
        const transactionDescription = description ?? "No description provided";
    }
    const transactionType= isCredit ? "credit": "debit" ;
    console.log("Transaction Summary:");
    console.log("Type:", transactionType);
    console.log("Amount:", amount);
    console.log("Description:", description);
    try {
    processTransaction(1000,true,"Salary");  // Valid credit
    processTransaction(500,false, undefined); // Valid debit with undefined description
    processTransaction(-200, true,"Invalid"); // This will throw an error
    } 
    catch (error) {
    console.error("Error:", (error as Error).message);
    }
}