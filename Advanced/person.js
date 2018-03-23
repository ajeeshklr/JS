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

module.exports = Person;
