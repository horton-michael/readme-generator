const inquirer = require("inquirer");
const questions = require("./utils/questions.js");
const { createFile } = require("./utils/utils.js");
const returnMarkdown = require("./utils/returnMarkdown.js");

const createReadMe = () => {
  inquirer.prompt(questions).then((content) => {
    createFile("README.md", returnMarkdown(content));
  });
};

createReadMe();
