// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  [Description](#description)  
  [Install](#install)  
  [Usage](#usage)  
  [Liscenses](#liscenses)  
  [Contribute](#contribute)  
  [Testing](#testing)  
  [Questions](#questions)  

  ## Description
  ${data.description}
  ## Install Instructions
  ${data.install}
  ## Usage Instructions
  ${data.use}
  ## Liscenses
  ${data.liscenses}
  ## How to Contribute
  ${data.contribution}
  ## Testing
  ${data.testing}
  ## Questions
  Find me on [GitHub!](https://github.com/${data.gitHub})
  Or contact me with [email!](${data.email})
`;
}

module.exports = generateMarkdown;
