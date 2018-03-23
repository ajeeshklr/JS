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

};

let person  = new Person();
person.FirstName = "Ajeesh";
person.MiddleName = "Balan";
person.LastName = "Nair";
person.Age = 35;
// let person  = new Person("Ajeesh","Balan","Nair",35);

console.log(person.FullName);
