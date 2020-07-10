// Variables
const inquirer = require("inquirer");
const fs = require("fs");
// const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
    return inquirer.prompt([
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
        name: "installation-instructions",
        message: "List the installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "What is the purpose of your usage of this application?"
    },
    {
        type: "input",
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
            name: "questions",
            message: "What is your email address?"
        },
    ])
}

// function to write README file
    promptUser()
        .then(function(answers) {
            const html = generateHTML(answers);

            return writeFileAsync("index.html", html);
        })
        .then(function() {
            console.log("Success");
        })
        .catch(function(err) {
            console.log(err);
        })

        
    function writeFile () {
        var readMe = data.name.toLowerCase().split(' ').join('') + ".json";

        fs.writeFile("README.md", JSON.stringify(data, null, '\t'), function (err) {

            if (err) {
                return console.log(err);
            }
            console.log("Success");

        });

    };

    // function to initialize program
    function init() {
        inquirer.prompt(questions).then((answers)=>{
        },
      )};

    // function call to initialize program
    init();
