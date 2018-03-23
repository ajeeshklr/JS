var Employee = require('./employee.js')

let employee  = new Employee();
employee.FirstName = "Ajeesh";
employee.MiddleName = "Balan";
employee.LastName = "Nair";
employee.Age = 35;
// let person  = new Person("Ajeesh","Balan","Nair",35);

console.log(employee.FullName);
