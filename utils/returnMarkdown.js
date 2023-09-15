const { getLicense } = require("./utils");

function returnMarkdown(content) {
  let markdown = `
  # ${content.title}
  ![License Badge](${getLicense(content.license)})
  ## Description
  ${content.description}`;

  if (content.confirmTOC) {
    markdown += `
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)`;

    if (content.confirmCredits) {
      markdown += `
  * [Credits](#credits)`;
    }

    markdown += `
  * [License](#license)`;

    if (content.confirmFeatures) {
      markdown += `
  * [Features](#features)`;
    }

    if (content.confirmContribution) {
      markdown += `
  * [How to Contribute](#contribution)`;
    }

    if (content.confirmTest) {
      markdown += `
  * [Tests](#tests)`;
    }

    markdown += `
  * [Questions](#questions)`;
  }

  markdown += `
## Installation
${content.installation}
## Usage
${content.usage}`;

  if (content.confirmCredits) {
    markdown += `
## Credits
${content.credits}`;
  }

  markdown += `
## License
${content.license}`;

  if (content.confirmFeatures) {
    markdown += `
## Features
${content.features}`;
  }

  if (content.confirmContribution) {
    markdown += `
## Contribution
${content.contribution}`;
  }

  if (content.confirmTest) {
    markdown += `
## Tests
${content.test}`;
  }

  markdown += `
## Questions
If you have any questions, reach out to me at ${content.email}, or visit my GitHub page at https://www.github.com/${content.github}.`;

  return markdown;
}

module.exports = returnMarkdown;
