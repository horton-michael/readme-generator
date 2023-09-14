const { getLicense } = require("./utils");

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

module.exports = returnMarkdown;
