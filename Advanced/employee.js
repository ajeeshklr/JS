var Person = require('./person.js');

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

module.exports = Employee;
