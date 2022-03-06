const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//Questions here

//Generate html file here
const routeToDist = path.resolve(__dirname, "dist");
const fileToDist = path.join(routeToDist, "index.html");
const teamArray = [];

function buildTeam() {
	fs.writeFileSync(fileToDist, generateHtml(teamArray), "utf-8");
}
