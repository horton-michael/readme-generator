module.exports = [
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
    type: "confirm",
    name: "confirmTOC",
    message: "Do you want to include a table of contents?",
    default: true,
  },
  {
    type: "input",
    name: "toc",
    message: "Enter table of contents.",
    when: ({ confirmTOC }) => confirmTOC,
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
    type: "confirm",
    name: "confirmCredits",
    message: "Do you want to include credits?",
    default: true,
  },
  {
    type: "input",
    name: "credits",
    message: "Enter credits.",
    when: ({ confirmCredits }) => confirmCredits,
  },
  {
    type: "list",
    name: "license",
    message: "Select a license.",
    choices: ["MIT", "GPL", "Apache", "BSL"],
  },
  {
    type: "confirm",
    name: "confirmFeatures",
    message: "Do you want to include features?",
    default: true,
  },
  {
    type: "input",
    name: "features",
    message: "Enter features.",
    when: ({ confirmFeatures }) => confirmFeatures,
  },
  {
    type: "confirm",
    name: "confirmContribution",
    message: "Do you want to include contribution guidelines?",
    default: true,
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines.",
    when: ({ confirmContribution }) => confirmContribution,
  },
  {
    type: "confirm",
    name: "confirmTest",
    message: "Do you want to include test instructions?",
    default: true,
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions.",
    when: ({ confirmTest }) => confirmTest,
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
