/*
2. Create an Employee Class with Inheritance:
Define an Employee class with properties name and salary.
Create a subclass Manager that adds a department property.
Both classes should have a getDetails method that returns
a string with the employee's details.
*/

class Employee{
    name: string;
    salary: number;
    constructor(name: string, salary:number){
        this.name = name;
        this.salary = salary;
    }
    getDetails(): string {
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }

}
class Manager extends Employee {
    department: string;
    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }
    getDetails(): string {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}


const emp = new Employee("Alice", 50000);
const mgr = new Manager("Bob", 80000, "Sales");
console.log(emp.getDetails());
console.log(mgr.getDetails());