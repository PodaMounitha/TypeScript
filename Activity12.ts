/*
1. Call displayMember for two members: one with email, one without.
2. Use calculateFines to sum fines: 5, 10, 2.5.
3. Compute a membership fee for $100 with default discount, then with 20%.
4. Greet visitors “Alice” and “Bob” using both vipGreet and consoleGreet.
5. Compute factorial(5).
6. Generate a text report and a JSON report for an array of sample objects (e.g., {
title: "1984" } ).
*/

function displayMember(member: { name: string; email?: string }) {
    console.log(`Member Name: ${member.name}`);
    if (member.email) {
        console.log(`Email: ${member.email}`);
    } else {
        console.log("Email not provided.");
    }
}   
// Call displayMember for two members
displayMember({ name: "Alice", email: ""});
displayMember({ name: "Bob", email: "Bob@gmail.com" });

function calculateFines(...fines: number[]): number {
    return fines.reduce((total, fine) => total + fine, 0);
}
calculateFines(5, 10, 2.5); // Sum fines: 5 + 10 + 2.5 = 17.5
function computeMembershipFee(baseFee: number, discount: number = 0): number {
    return baseFee * (1 - discount);
}

// Compute membership fee with default discount
const defaultFee = computeMembershipFee(100); // $100 with default discount (0%)
console.log(`Default Membership Fee: $${defaultFee}`);
// Compute membership fee with 20% discount
const discountedFee = computeMembershipFee(100, 0.2); // $100 with 20% discount
console.log(`Discounted Membership Fee: $${discountedFee}`);

function vipGreet(name: string): string {
    return `VIP Greeting: Welcome, ${name}!`;
}   
function consoleGreet(name: string): void {
    console.log(`Console Greeting: Hello, ${name}!`);
}
// Greet visitors using both functions
const visitors1 = ["Alice", "Bob"];
visitors1.forEach(visitor => {
    console.log(vipGreet(visitor));
    consoleGreet(visitor);
});
function factorial1(n: number): number {
    if (n <= 1) return 1;
    return n * factorial1(n - 1);
}
// Compute factorial of 5
const factResult = factorial1(5);
console.log(`Factorial of 5: ${factResult}`);

function generateTextReport(data: { title: string }[]): string {
    return data.map(item => `Title: ${item.title}`).join("\n");
}
function generateJsonReport(data: { title: string }[]): string {
    return JSON.stringify(data, null, 2);
}
// Sample data for reports
const sampleData = [
    { title: "1984" },
    { title: "Brave New World" },
    { title: "Fahrenheit 451" }
];
// Generate text and JSON reports
const textReport = generateTextReport(sampleData);
const jsonReport = generateJsonReport(sampleData);
console.log("Text Report:\n", textReport);
console.log("JSON Report:\n", jsonReport);

