//Define a union type for a vehicle that can either be a car or bike with different properties.
//Write a function to log details based on the vehicle type.

type Car = {
    type: 'car';
    make: string;
    model: string;
    year: number;
};
type Bike = {
    type: 'bike';
    make: string;
    model: string;
    year: number;
};

type Vehicle = Car | Bike;
function logVehicleDetails(vehicle: Vehicle): void {
    if (vehicle.type === 'car') {
        console.log(`Car Details: ${vehicle.make} ${vehicle.model}, Year: ${vehicle.year}`);
    } else {
        console.log(`Bike Details: ${vehicle.make} ${vehicle.model}, Year: ${vehicle.year}`);
    }
}

let myCar: Vehicle = { type: 'car', make: 'Toyota', model: 'Corolla', year: 2020 };
let myBike: Vehicle = { type: 'bike', make: 'Yamaha', model: 'MT-07', year: 2021 };     
logVehicleDetails(myCar);
logVehicleDetails(myBike);
