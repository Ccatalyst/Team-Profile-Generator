const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const routeToDist = path.resolve(__dirname, "dist");
const fileToDist = path.join(routeToDist, "index.html");
const generateHtml = require("./src/Htmltemplate");
const teamArray = [];
//Questions here
const employeePrompt = [
	{
		message: "What is the name of the employee you want to add?",
		name: "name",
		type: "input",
	},
	{
		message: "What is the ID number of the employee you want to add?",
		name: "id",
		type: "input",
	},
	{
		message: "What is the email of the employee you want to add?",
		name: "email",
		type: "input",
	},
	{
		message: "What is the role of the employee you want to add?",
		name: "role",
		type: "list",
		choices: ["Manager", "Engineer", "Intern"],
	},
];
const doAgain = [
	{
		message: "Do you want to add another employee?",
		name: "again",
		type: "list",
		choices: ["Yes", "No, generate roster"],
	},
];

//prompt for Employee questions
//role, name, id, email
//based on the answer to the role quesion, ask aobut role specifics
//manager: officenumber
//engineer: github
//intern: school
function questionPrompt() {
	inquirer.prompt(employeePrompt).then((response) => {
		if (response.role === "Manager") {
			const managerName = response.name;
			const managerId = response.id;
			const managerEmail = response.email;
			inquirer
				.prompt([
					{
						message: "What is your office room number?",
						name: "officeNumber",
						type: "input",
					},
				])
				.then((managerResponse) => {
					const newManager = new Manager(
						managerName,
						managerId,
						managerEmail,
						managerResponse.officeNumber
					);
					teamArray.push(newManager);
					console.log(teamArray);
					addOrGenerate();
				});
		}
		if (response.role === "Engineer") {
			const engineerName = response.name;
			const engineerId = response.id;
			const engineerEmail = response.email;
			inquirer
				.prompt([
					{
						message: "What is your Github name?",
						name: "github",
						type: "input",
					},
				])
				.then((engineerResponse) => {
					const newEngineer = new Engineer(
						engineerName,
						engineerId,
						engineerEmail,
						engineerResponse.github
					);
					teamArray.push(newEngineer);
					console.log(teamArray);
					addOrGenerate();
				});
		}
		if (response.role === "Intern") {
			const internName = response.name;
			const internId = response.id;
			const internEmail = response.email;
			inquirer
				.prompt([
					{
						message: "What wchool did you go to?",
						name: "school",
						type: "input",
					},
				])
				.then((internResponse) => {
					const newIntern = new Intern(
						internName,
						internId,
						internEmail,
						internResponse.school
					);
					teamArray.push(newIntern);
					addOrGenerate();
				});
		}
	});
}
function addOrGenerate() {
	inquirer.prompt(doAgain).then((response) => {
		if (response.again === "Yes") {
			questionPrompt();
		}
		if (response.again === "No, generate roster") {
			buildTeam();
		}
	});
}
questionPrompt();
//Generate html file here

function buildTeam() {
	fs.writeFileSync(fileToDist, generateHtml(teamArray), "utf-8");
}
