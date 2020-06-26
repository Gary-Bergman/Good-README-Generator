// Global Variables
var inquirer = require("inquirer");
var fs = require("fs");
// var genMarkdown = require("utils/generateMarkdown.js")
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
        message: "How would you like to describe your project?",
        name: "description"
    },
    // {
    //     type: "input",
    //     message: "What should be included in your table of contents?",
    //     name: "tableOfContents"
    // },
    {
        type: "input",
        message: "How should the user run installations?",
        default: "npm i",
        name: "install"
    },
    {
        type: "input",
        message: "How is this project used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "How should the user run tests?",
        default: "npm test",
        name: "test"
    },
    {
        type: "list",
        message: "How is this project licensed?",
        choices: ["APM:	/apm/l/:packageName", "B", "C", "D"],
        name: "license"
    },
];

// function to write README file
// function writeToFile(fileName, data) {

// }
// console.log("hello")




    // function to initialize program
function init() {
    inquirer.prompt(questions).then(function (userAnswers) {
        var markdown = generateMarkdown(userAnswers)
        fs.writeFile(filename, markdown), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success! File was written to goodReadMe.md");
        })
    });

    }

    // function call to initialize program
    init();


