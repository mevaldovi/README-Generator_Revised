// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== null) {
    console.log("license exists");
  } else {
    console.log("  ");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.url !== null) {
    console.log("url exists");
  } else {
    console.log("  ");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.section !== null) {
    console.log("license section exists");
  } else {
    console.log("  ");
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    # ${response.title}
      
      # Table of Content
      -[description](#description)

      -[installation](#installation)

      -[usage](#usage)

      -[licenses](#licenses)

      -[contribution](#contribution)

      -[test](#test)

      -[username](#username)

      -[profile](#profile)
      
      
          ${response.description}
      ##description:

        ${response.technology}
        ##technology:
      
          ${response.installation}
      ##installation:
      
          ${response.usage}
      ##usage:
      
          ${response.licenses}
      ##licenses:
      
          ${response.agknowledgements}
      ##agknowledgements:
      
          ${response.test}
      ##test:

      ${response.contact}
      ##contact:

        
`;
}

module.exports = generateMarkdown;

renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();
generateMarkdown();
