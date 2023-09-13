const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a project description.",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines, if available.",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions, if available.",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license.",
    choices: ["MIT", "GPL", "Apache", "BSL"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address.",
  },
];

const createFile = (file, content) => {
  fs.writeFile(file, content, (err) =>
    err ? console.log(err) : console.log("File created!")
  );
};

function returnMarkdown(content) {
  return `
# ${content.title}
![License Badge](${getLicense(content.license)})
## Description
${content.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)
## Installation
${content.installation}
## Usage
${content.usage}
## Contribution
${content.contribution}
## Test
${content.test}
## License
${content.license}
## Questions
If you have any questions, reach out to me at ${
    content.email
  }, or visit my GitHub page at https://www.github.com/${content.github}.
`;
}

const getLicense = (license) => {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "GPL":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "Apache":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "BSL":
      return "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
    default:
      return "";
  }
};

const createReadMe = () => {
  inquirer.prompt(questions).then((content) => {
    createFile("README.md", returnMarkdown(content));
  });
};

createReadMe();
