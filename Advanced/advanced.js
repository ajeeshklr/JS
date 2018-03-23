const __firstNameConst = "FirstName";
const __middleNameConst = "MiddleName";
const __lastNameConst = "LastName";

const __ageConst = "Age";

class Person{

  constructor(firstName,middleName,lastName,age){
    this.FirstName = firstName;
    this.MiddleName = middleName;
    this.LastName = lastName;
    this.Age = age;
  }

 set [__firstNameConst] (value){
   this._firstName = value;
 }

 get [__firstNameConst] (){
   return this._firstName;
 }

 set [__lastNameConst] (value){
   this._lastName = value;
 }

 get [__lastNameConst] () { return this._lastName ; }

 set [__middleNameConst] (value ) { this._middleName = value  }

 get [__middleNameConst] () { return this._middleName; }

 set [__ageConst] (value) { this._age = value; }

 get [__ageConst] () { return this._age; }

 get FullName(){
   return [this.FirstName, this.MiddleName, this.LastName ].join(" ");
 }

 get BloodGroup(){ return this._bloodGroup; }
 set BloodGroup(bg) { this._bloodGroup = bg; }

 get CurrentAddress() { return this._currentAddress; }
 set CurrentAddress(value) { this._currentAddress = value; }

 get PermanentAddress() { return this._permanentAddress; }
 set PermanentAddress(value) { this._permanentAddress = value; }

};

class Employee extends Person{

  get EmployerName(){ return this._employerName; }
  set EmployerName(name) { this._employerName = name; }

  get Position () { return this._position; }
  set Position (position) { this._position = position; }

  get JoiningDate() { return this._joiningDate; }
  set JoiningDate(joiningDate) {
    if(!joiningDate){
      this._joiningDate = Date.now();
    }
    this._joiningDate = joiningDate;
  }

};

let employee  = new Employee();
employee.FirstName = "Ajeesh";
employee.MiddleName = "Balan";
employee.LastName = "Nair";
employee.Age = 35;
// let person  = new Person("Ajeesh","Balan","Nair",35);

console.log(employee.FullName);
