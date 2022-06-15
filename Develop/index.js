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

  //Github Username
  {
    type: "input",
    message: "Plese enter your Github username:",
    name: "GithubUser",
  },
  //Email
  {
    type: "input",
    message: "Plese enter your Email:",
    name: "Email",
  },

  //License
  {
    type: "checkbox",
    message: "What License did you use for your project?",
    name: "License",
    choices: ["cc", "gpl", "isc", "MIT", "not mentioned above"],
    // If license is not mentioned have user input it
  },

  // LANGUAGES USED FOR PROJECT
  {
    type: "checkbox",
    message: "What languages are you using?",
    name: "Languages",
    choices: ["HTML", "JavaScript", "CSS", "Node", "Bootstrap"],
  },

  // PROJECT Description
  {
    type: "input",
    message: "Please provide a description of your project:",
    name: "Description",
  },

  // CONTRIBUTE
  {
    type: "confirm",
    message: "Has others contribute to your project? Y= Yes, N= No",
    name: "Contribute",
    default: false,
  },
  {
    type: "input",
    message:
      "Type in your partners GitHub Username (if this does not apply type 'N/A'):",
    name: "Partners",
  },

  //INSTALLATION
  {
    type: "input",
    message: "How to install project?",
    name: "Installation",
  },

  //USAGE
  {
    type: "input",
    message: "Please provide user instructions:",
    name: "Usage",
  },

  // TEST
  {
    type: "input",
    message: "Plese proived tests that have been completed.",
    name: "Test",
  },
];

// .then((answers) => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./generated/" + fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully wrote: " + fileName);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// run the app
init();
