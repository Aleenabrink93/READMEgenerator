//node modules
var inquirer = require('inquirer');
var fs = require('fs');

//generate questions with inquirer
inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project tile?"
    },
    {
        type: "input",
        name: "description",
        message: "What does it do?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install it?"
    },
    {
        type: "input",
        name: "usage",
        message: "How to use it?"
    },
    {
        type: "input",
        name: "contributions",
        message: "How to contribute to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "How to test it?"
    },
    {
        type: "list",
        name: "licenses",
        message: "What license did you use?",
        choices:["MIT","GPL","Apache","Unlicensed"]
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "url",
        message: "What is your GitHub url?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
  ])
  .then((answers) => {
    console.log(answers);
    writeAnsweresToReadme(answers);

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("there is an error");
    } else {
      console.log("there is an error");
    }
  });

function writeAnsweresToReadme(answers) {
    var title = answers.title;
    var description = answers.description;
    var installation = answers.installation;
    var usage = answers.usage;
    var contributions = answers.contributions;
    var test = answers.test;
    var licenses = answers.licenses;
    var username = answers.username;
    var url = answers.url;
    var email = answers.email;

function renderLincenseBadge (license){
    const badges ={
        MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        GPL: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        Unlicensed: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
    return badges[license]
}

//readme template
    var template = `
# ${title}
## Descriptions
${description}

## Table of contents
* [Installation](#intallation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Licenses](#licenses)
* [Question](#question)

## Installation
${installation}
## Usage
${usage}
## Contribution
${contributions}
## Test Instruction
${test}
## Licenses
This project is licensed under ${licenses}${renderLincenseBadge(licenses)}
## Questions?
If you have any questions, feel free to reach me at ${email}   
GitHub: [${username}](${url})`;
    fs.writeFile("readme.md", template, (error) => error ? console.log(error) : console.log("Success"));
}