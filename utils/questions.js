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
    type: "confirm",
    name: "confirmContribution",
    message: "Do you want to include Contribution guidelines?",
    default: true,
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines, if available.",
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
