/*
Define an enum Role for staff roles (Doctor, Nurse, Admin).
Create an interface Staff with fields for id , name , and role .
Create an array of staff members using the interface and enum.
Write a function that prints a summary of all staff, showing their name and role.
*/

enum Role{
    Doctor = "Doctor",
    Nurse = "Nurse",
    Admin = "Admin"
}
interface staff{
    id : number;
    name : string;
    role : Role;
}
const staffmembers: staff[]=[
    { id: 1, name: "Anand", role: Role.Doctor },
    { id: 2, name: "Bharathi", role: Role.Nurse },
    { id: 3, name: "Charvi", role: Role.Admin },
    { id: 4, name: "Danalakshmi", role: Role.Doctor }
]

function printstaffsummary(staff: staff[]): void {
    console.log("Staff Summary:");
    staff.forEach(member => {
        console.log(`Name: ${member.name}, Role: ${member.role}`);
    });
}

// Call the function to print the staff summary
printstaffsummary(staffmembers);
