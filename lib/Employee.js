//A class is an identifier that has a number of properties/attributes and functions called "methods" that are applied to it. A method is a function inside of a class
//parent class: Toyota: shared characteristics: wheels, shifter, windows
//child class: Tacoma: unique characteristics: truck bed, tow hitch
//
class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return "Employee";
	}
}

module.exports = Employee;

//name

//id

//email

//getName()
//getId()
//getEmail()

//getRole()
