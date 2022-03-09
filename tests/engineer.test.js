const Engineer = require("../lib/Engineer");

describe("This test is for the engineer class", () => {
	it("should have a github property when instantiated with the github parameter", () => {
		const name = "Matthew";
		const id = 55;
		const email = "matthew@mail.com";
		const github = "Ccatalyst";
		const employee = new Engineer(name, id, email, github);
		expect(employee.github).toEqual(github);
	});
	it("should return the github property when the getGithub method is called", () => {
		const name = "Matthew";
		const id = 55;
		const email = "matthew@mail.com";
		const github = "Ccatalyst";
		const employee = new Engineer(name, id, email, github);
		expect(employee.getGithub()).toEqual(github);
	});
	it("should return 'Engineer' when the getRole method is called", () => {
		const name = "Matthew";
		const id = 55;
		const email = "matthew@mail.com";
		const github = "Ccatalyst";
		const employee = new Engineer(name, id, email, github);
		expect(employee.getRole()).toEqual("Engineer");
	});
});
