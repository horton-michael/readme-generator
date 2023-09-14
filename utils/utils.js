const fs = require("fs");

const createFile = (file, content) => {
  fs.writeFile(file, content, (err) =>
    err ? console.log(err) : console.log("File created!")
  );
};

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

module.exports = { createFile, getLicense };
