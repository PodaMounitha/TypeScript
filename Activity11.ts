type transactionType = "checkout" | "return" | "priority" | "cancelled";

type TransactionCounter = {
    [key in transactionType]: number;
};

// Initial counts
const transactionCounts: TransactionCounter = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0
};

// Sample transactions
const transactions: transactionType[] = ["checkout", "return", "priority", "cancelled", "checkout", "priority"];

/* 1. Count each transaction type using a for loop */
for (const transaction of transactions) {
    transactionCounts[transaction]++;
}
console.log("Transaction Counts:", transactionCounts);

/* 2. while(true) loop with break on first 'priority' */
let i = 0;
while (true) {
    if (i >= transactions.length) break;
    if (transactions[i] === "priority") {
        console.log("Priority transaction found:", transactions[i]);
        break;
    }
    i++;
}

/* 3. do...while loop with dynamic queue */
const dynamicQueue: transactionType[] = ["checkout", "return", "priority"];
do {
    const nextTransaction = dynamicQueue.shift();
    if (nextTransaction) {
        console.log("Processing transaction:", nextTransaction);
        if (nextTransaction === "return") {
            dynamicQueue.push("return"); // Add new return to queue dynamically
        }
    }
} while (dynamicQueue.length > 0);

/* 4. Reset all inventory counts to zero using for...in */
for (const key in transactionCounts) {
    transactionCounts[key as transactionType] = 0;
}
console.log("Transaction Counts after reset:", transactionCounts);

/* 5. Print visitor names in reverse */
const visitors: string[] = ["Alice", "Bob", "Charlie", "Diana"];

console.log("Visitors in reverse order:");
for (let j = visitors.length - 1; j >= 0; j--) {
    console.log(visitors[j]);
}

// OR using for...of with slice().reverse()
console.log("Visitors in reverse order (for...of):");
for (const visitor of visitors.slice().reverse()) {
    console.log(visitor);
}

// Final logs
console.log("Final Transaction Counts:", transactionCounts);
console.log("Visitors:", visitors);
