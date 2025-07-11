//Define a object that accepts a user object with name,age and email and returns a formatted string

interface User {
    name: string,
    age :number,
    email:string
}

function formatUser(user: User): string {
    return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
}
type User1 = {
    name?: string,
    age: number,
    email: string;
};
function formatUser1(user: User1): string {
    return `Name: ${user.name ?? "N/A"}, Age: ${user.age}, Email: ${user.email}`;
}

console.log(formatUser({ name: "John Doe", age: 30, email: "abc@gmail.com"}));

console.log(formatUser1({ age: 30, email: "abc@gmail.com" }));
