const Employee = require("./Employee");

//extends is an EXTENSION of the parent class, in this case Employee
class Intern extends Employee {
	constructor(name, id, email, school) {
		//superimposed the name, id, email from Employee class
		super(name, id, email, "Intern");
		this.school = school;
	}
	getSchool() {
		return this.school;
	}
}
module.exports = Intern;
