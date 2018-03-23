const __firstNameConst = "FirstName";
const __middleNameConst = "MiddleName";
const __lastNameConst = "LastName";

const __ageConst = "Age";

class Person{

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
 



}
