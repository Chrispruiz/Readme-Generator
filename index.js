// TODO: Include packages needed for this application
 const inquirer = require('inquirer');
 const fs = require('fs');
 const generateMarkdown = require('./utils/generateMarkdown');
 
 
 
// Create an array of questions for user input

        const question1 = {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        };
        const question2 = {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        };
        const question3 = {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        };
        const question4 = {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project:'
          };
          const question5 = {
            type: 'input',
            name: 'installationInstruction',
            message: 'Provide installation instructions of your project:'
          };
          const question6 = {
            type: 'input',
            name: 'usageInformation',
            message: 'Enter usage information:'
          };
          const question7 = {
            type: 'input',
            name: 'contributors',
            message: 'Enter contributors:'
          };
          const question8 = {
            type: 'input',
            name: 'tests',
            message: 'Enter command for tests:'
          };
          const question9 = {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['MIT_License', 'GNU_GPLv3', 'Apache_License_2.0', 'None']
          };   
          

// TODO: Create a function to write README file
inquirer
.prompt([question1, question2, question3, question4, question5, question6, question7, question8, question9])
.then(function(data) {
    var filename = data.title + '.md'; 

    console.log(data);
    fs.writeFile(filename, generateMarkdown(data), function(err) {
        if (err) throw err;
      
        console.log('README complete! Check out ' + data.title + '.md' + ' to see the output!');
      });
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

