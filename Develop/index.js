// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input (Inquire Package)
const questions = [];

var inquirer = require("inquirer");
inquirer.prompt([
  // MAIN TITLE OF PROJECT
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },

  // LANGUAGES USED FOR PROJECT
  {
    type: "checkbox",
    message: "What languages are you using?",
    name: "languages",
    choices: ["HTML", "JavaScript", "CSS"],
  },

  // PROJECT MOTIVATION
  {
    type: "input",
    message: "What was the motivation behind this project?",
    name: "motivation",
  },

  //

  {
    type: "input",
    message: "What problem does this project solve?",
    name: "solution",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
