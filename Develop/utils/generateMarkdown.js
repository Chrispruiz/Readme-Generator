const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license != 'None') {
  return `![image](https://img.shields.io/badge/license-${license}-blue.svg)`
   } else {
   return  `` 
   }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'None') {
    return `* [License](#license)`
     } else {
     return  `` 
     }
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `## License:
    Licensed under the ${license}`
     } else {
     return  '' 
     }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description: 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation) 
  * [Usage](#usage)
  * [Contributers](#contributers)
  ${renderLicenseLink(data.license)}
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  Run the following code in the command line to run dependencies:
  ${data.installationInstruction}
  ## Usage:
  ${data.usageInformation}
  ## Contributers:
  ${data.contributors}
  ## Tests:
  Run the following command to run tests:
  ${data.tests}
  ${renderLicenseSection(data.license)}
  ## Questions:
  If you have any questions, please feel free to contact me at ${data.email}. For more of my work, visit [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
