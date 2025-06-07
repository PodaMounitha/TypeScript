function genericfunction<T>(arg : T): T{
    return arg;
}

console.log(genericfunction<string>("Hello World"));
console.log(genericfunction<number>(42));
console.log(genericfunction<boolean>(true));
console.log(genericfunction<Array<number>>([1, 2, 3, 4, 5]));

