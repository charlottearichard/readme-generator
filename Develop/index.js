// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input (Inquire Package)
const questions = [
  // MAIN TITLE OF PROJECT
  {
    type: "input",
    message: "What is the name of your project?",
    name: "Title",
  },

  // LANGUAGES USED FOR PROJECT
  {
    type: "checkbox",
    message: "What languages are you using?",
    name: "Languages",
    choices: ["HTML", "JavaScript", "CSS"],
  },

  // PROJECT Description
  {
    type: "input",
    message: "Please provide a description of your project:",
    name: "Description",
  },

  //INSTALLATION
  {
    type: "input",
    message: "How to install project?",
    name: "Installation",
  },
];

// .then((answers) => console.log(answers));

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// Function call to initialize app

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully wrote: " + fileName);
  });
}

// initialization function
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// run the app
init();
