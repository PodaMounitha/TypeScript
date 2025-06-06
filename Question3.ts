//Calculate Total Price! Write a TypeScript function to calculate the total price of an array of product objects. Each product has a price and quantity.


interface Product{
    quantity: number,
    price: number
};

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
}

let cart : Product[] = [
    { quantity: 2, price: 10.5 },
    { quantity: 1, price: 20.0 },
    { quantity: 3, price: 5.0 }
];
console.log(calculateTotalPrice(cart));