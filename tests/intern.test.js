const Intern = require("../lib/Intern");

describe("This test is for the intern class", () => {
	it("should have a school property when instantiated with the school parameter", () => {
		const name = "Matthew";
		const id = 55;
		const email = "matthew@mail.com";
		const school = "Denver University";
		const employee = new Intern(name, id, email, school);
		expect(employee.school).toEqual(school);
	});
	it("should return the school property when the getSchool method is called", () => {
		const name = "Matthew";
		const id = 55;
		const email = "matthew@mail.com";
		const school = "Denver University";
		const employee = new Intern(name, id, email, school);
		expect(employee.getSchool()).toEqual(school);
	});
	it("should return 'Intern' when the getRole method is called", () => {
		const name = "Matthew";
		const id = 55;
		const email = "matthew@mail.com";
		const school = "Denver University";
		const employee = new Intern(name, id, email, school);
		expect(employee.getRole()).toEqual("Intern");
	});
});
