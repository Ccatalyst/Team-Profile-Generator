const Employee = require("./Employee");

//extends is an EXTENSION of the parent class, in this case Employee
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		//superimposed the name, id, email from Employee class
		super(name, id, email, "Manager");
		this.officeNumber = officeNumber;
	}
	getOfficeNumber() {
		return this.officeNumber;
	}
}
module.exports = Manager;
