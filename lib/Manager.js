const Employee = require("./Employee");

//extends is an EXTENSION of the parent class, in this case Employee
class Manager extends Employee {
	constructor(name, id, email, officenumber) {
		//superimposed the name, id, email from Employee class
		super(name, id, email);
		this.officenumber = officenumber;
	}
	getOfficenumber() {
		return this.officenumber;
	}
	getRole() {
		return "Manager";
	}
}
module.exports = Manager;
