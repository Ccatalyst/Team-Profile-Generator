const Employee = require("../lib/Employee");

describe("Employee Test", () => {
	it("should create an employee object", () => {
		const employee = new Employee();
		expect(typeof employee).toBe("object");
	});

	it("should have a name property when instantiated with a name perameter", () => {
		const name = "Molly";
		const id = 10;
		const email = "molly@mail.com";
		const employee = new Employee(name, id, email);
		expect(employee.name).toEqual(name);
	});
	it("should have an id property when instantiated with an id perameter", () => {
		const name = "Molly";
		const id = 10;
		const email = "molly@mail.com";
		const employee = new Employee(name, id, email);
		expect(employee.id).toEqual(id);
	});
	it("should have an email property when instantiated with an email perameter", () => {
		const name = "Molly";
		const id = 10;
		const email = "molly@mail.com";
		const employee = new Employee(name, id, email);
		expect(employee.email).toEqual(email);
	});
	it("should return the name of the object when getName method is invoked", () => {
		const name = "Molly";
		const id = 10;
		const email = "molly@mail.com";
		const employee = new Employee(name, id, email);
		expect(employee.getName()).toEqual(name);
	});
	it("should return the id of the object when getId method is invoked", () => {
		const name = "Molly";
		const id = 10;
		const email = "molly@mail.com";
		const employee = new Employee(name, id, email);
		expect(employee.getId()).toEqual(id);
	});
	it("should return the email of the object when getEmail method is invoked", () => {
		const name = "Molly";
		const id = 10;
		const email = "molly@mail.com";
		const employee = new Employee(name, id, email);
		expect(employee.getEmail()).toEqual(email);
	});
	it("should return 'Employee' when the getRole method is invoked", () => {
		const name = "Molly";
		const id = 10;
		const email = "molly@mail.com";
		const employee = new Employee(name, id, email);
		expect(employee.getRole()).toEqual("Employee");
	});
});
