/*
1.Create a Bank Account Class: Write a BankAccount class with the following properties:
accountNumber: string
balance: number (private)
The class should have methods:
deposit(amount: number): void (to add to balance)
getBalance(): number (to return current balance)
*/

class BankAccount{
    public accountNumber: string;
    private balance: number;
    constructor(accountNumber: string, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
    getBalance(): number {
        return this.balance;
    }
}


let myAccount = new BankAccount("123456789", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(`Current Balance: Rs.${myAccount.getBalance()}`);