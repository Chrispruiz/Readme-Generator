const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![image](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description: 
  ${data.description}
  ## Table of Contents
    * [Installation](#installation) 
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
  ## Installation
  Run the following code in the command line to run dependencies:
  ${data.installationInstruction}
  ## License:
  
`;
}

module.exports = generateMarkdown;
