//A class is an identifier that has a number of properties/attributes and functions called "methods" that are applied to it. A method is a function inside of a class
//parent class: Toyota: shared characteristics: wheels, shifter, windows
//child class: Tacoma: unique characteristics: truck bed, tow hitch
//
class Employee {
	constructor(name, id, email, role = "Employee") {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
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
		return this.role;
	}
	// generateHTMLCard() {
	// 	return `
	// 		<div class="card">
	// 			<div class="top">
	// 				<div>${this.name}</div>
	// 				<div>${this.role}</div>
	// 			</div>
	// 			<div class="bottom">
	// 				<ul>
	// 					<li>ID: ${this.id}</li>
	// 					<li>Email: ${this.email}</li>
	// 					${
	// 						this.role === "Manager"
	// 							? `<li>Office Number: ${this.officeNumber}</li>`
	// 							: this.role === "Engineer"
	// 							? `<li>Github Account: ${this.github}</li>`
	// 							: `<li>Alma Mater: ${this.school}</li>`
	// 					}
	// 				</ul>
	// 			</div>
	// 		</div>
	// 		`;
	// }
}

module.exports = Employee;

//name

//id

//email

//getName()
//getId()
//getEmail()

//getRole()
