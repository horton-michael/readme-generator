const inquirer = require("inquirer");

const createReadMe = () => {
  inquirer.prompt(questions).then((content) => {
    createFile("README.md", returnMarkdown(content));
  });
};

createReadMe();
