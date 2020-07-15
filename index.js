// Variables
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description."
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "List a table of contents with commas as a separator."
    },
    {
        type: "input",
        name: "installationinstructions",
        message: "List the installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "What is the purpose of your usage of this application?"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license:",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License v3.0"
        ]
        },
        {
            type: "input",
            name: "contributing",
            message: "How would you like to contribute?"
        },
        {
            type: "input",
            name: "tests",
            message: "Run a test using node index.js."
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
];

// function to write README file
      // function to initialize program, prompt questions and generate answers
      function init() {
        inquirer.prompt(questions).then((answers)=>{

            return writeFile("README.md", generateMarkdown(answers));
        })
        .then(function() {
            console.log("Success");
        })
        .catch(function(err) {
            console.log(err);
        });
    };

    // Writes answers onto template and prints/exports out to README.md
    function writeFile (filename, data) {

        fs.writeFileSync(filename, data)

    };

    // function call to initialize program
    init();
