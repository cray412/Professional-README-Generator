// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'PLease enter the title of your project:',
    name: 'title'
},
{
    type: 'input',
    message: 'PLease enter a description of your project:',
    name: 'description'
},
{
    type: 'input',
    message: 'PLease enter installation instructions for your project:',
    name: 'installation'
},
{
    type: 'input',
    message: 'PLease enter the usage information for your project:',
    name: 'usage'
},
{
    type: 'input',
    message: 'PLease enter the contribution guidelines for your project:',
    name: 'guidelines'
},
{
    type: 'input',
    message: 'PLease enter the test instructions for your project:',
    name: 'test'
},

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
