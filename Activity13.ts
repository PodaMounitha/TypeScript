/*

1. describePerson
Required: name: string
Optional: age?: number
Print "Name: <name>, Age: <age>" or "Name: <name>, Age: Unknown".

2. calculatePrice
Default: discount number = 0.1
Return price after discount.
3. Test calls:
describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100)); // 90
console.log(calculatePrice (100, 0.2)); // 80

*/


function describePerson(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        console.log(`Name: ${name}, Age: Unknown`);
    }
}
// Test calls
describePerson("Eve");
describePerson("Frank", 28);
function calculatePrice(price: number, discount: number = 0.1): number {
    return price * (1 - discount);
}
// Test calls
console.log(calculatePrice(100)); // 90
console.log(calculatePrice(100, 0.2)); // 80
// Additional test calls
console.log(calculatePrice(200)); // 180
console.log(calculatePrice(200, 0.15)); // 170
function calculatePriceWithTax(price: number, taxRate: number = 0.05): number {
    return price * (1 + taxRate);
}
// Test calls
console.log(calculatePriceWithTax(100)); // 105
console.log(calculatePriceWithTax(100, 0.1)); // 110
