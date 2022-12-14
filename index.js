// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');


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
    {
        type: 'list',
        message: 'PLease choose the appropriate license for your project:',
        name: 'license',
        choices: ['None', 'Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Zlib']
    },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile('README.md', generateMarkdown({ ...response }));
        })

}

// Function call to initialize app
init();
