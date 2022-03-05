const Employee = require("./Employee");

//extends is an EXTENSION of the parent class, in this case Employee
class Intern extends Employee {
	constructor(name, id, email, school) {
		//superimposed the name, id, email from Employee class
		super(name, id, email);
		this.school = school;
	}
	getSchool() {
		return this.school;
	}
	getRole() {
		return "Intern";
	}
}
module.exports = Intern;
