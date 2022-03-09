const Employee = require("./Employee");

//extends is an EXTENSION of the parent class, in this case Employee
class Engineer extends Employee {
	constructor(name, id, email, github) {
		//superimposed the name, id, email from Employee class
		super(name, id, email, "Engineer");
		this.github = github;
	}
	getGithub() {
		return this.github;
	}
}
module.exports = Engineer;
