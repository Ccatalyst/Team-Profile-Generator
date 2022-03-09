const Manager = require("../lib/Manager");

describe("This test is for the manager class", () => {
	it("should have an officeNumber property when instantiated with the officeNumber parameter", () => {
		const name = "Karen";
		const id = 98;
		const email = "karen@mail.com";
		const officeNumber = 666;
		const employee = new Manager(name, id, email, officeNumber);
		expect(employee.officeNumber).toEqual(officeNumber);
	});
	it("should return the officNumber property when the getOfficeNumber method is called", () => {
		const name = "Karen";
		const id = 98;
		const email = "karen@mail.com";
		const officeNumber = 666;
		const employee = new Manager(name, id, email, officeNumber);
		expect(employee.getOfficeNumber()).toEqual(officeNumber);
	});
	it("should return 'Manager' when the getRole method is called", () => {
		const name = "Karen";
		const id = 98;
		const email = "karen@mail.com";
		const officeNumber = 666;
		const employee = new Manager(name, id, email, officeNumber);
		expect(employee.getRole()).toEqual("Manager");
	});
});
