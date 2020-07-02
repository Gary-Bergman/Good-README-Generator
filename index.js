// Global Variables
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");
var filename = "goodReadMe.md";

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a brief description of your project",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        default: "( Use arrow keys)",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "install"
    },
    {
        type: "input",
        message: "How should the user run tests?",
        default: "npm run test",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    },
];


// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (userAnswers) {
        var markdown = generateMarkdown(userAnswers)
        fs.writeFile(filename, markdown, err => {
            if (err) {
                console.log(err);
            }
            console.log("Success! File was written to goodReadMe.md");
        })
    })
}

// function call to initialize program
init();




