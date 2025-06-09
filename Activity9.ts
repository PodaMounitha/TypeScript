/*
1. Define a CustomerID alias for string .
2. Create a Customer object alias with id: CustomerID , name: string , and optional email?: string .
3. Implement a processOrder function type alias that accepts orderId: number and a callback (status: OrderStatus) => void .
4. Use the Container<T> generic to wrap a Customer object.
*/

type CustomerID = string;
type Customer = {
    id: CustomerID;
    name: string;
    email?: string;
};
function processOrder (orderId:number, callback: (status: OrderStatus)=>void): void{
    console.log(`Processing order with ID: ${orderId}`);
    const status: OrderStatus = "completed";
    callback(status);
}

type OrderStatus = "pending" | "completed" | "cancelled";
type Constainer<T> = {
    value : T;
    timeStamp: Date;
}
const customer1: Customer = {
    id: "C123",
    name: "Alice",
    email: ""
}
const customerContainer: Constainer<Customer> = {
    value: customer1,
    timeStamp: new Date()
};
// Example usage of processOrder
processOrder(101, (status) => {
    console.log(`Order status: ${status}`);
});
// Example usage of customerContainer

console.log("Customer Container:", customerContainer);
console.log("Customer ID:", customerContainer.value.id);
console.log("Customer Name:", customerContainer.value.name);
console.log("Customer Email:", customerContainer.value.email ?? "No email provided");
console.log("Timestamp:", customerContainer.timeStamp);

// Output the customer details
console.log("Customer Details:");
console.log(`ID: ${customerContainer.value.id}`);
console.log(`Name: ${customerContainer.value.name}`);
console.log(`Email: ${customerContainer.value.email ?? "No email provided"}`);
console.log(`Timestamp: ${customerContainer.timeStamp}`);
