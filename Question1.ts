//Write a typescript function to calculate the factorial of a number with proper type annotations.

function factorial(n:number) :number{
    if(n<0){
        return -1;
    }
    else if(n===0 || n===1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}


console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(3));