// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${data.description}
    ${data.tableOfContents}
    ${data.installationinstructions}
    ${data.usage}
    ${data.license}
    ${data.contributing}
    ${data.tests}
    ${data.email}
    
  `;
  }
  module.exports = generateMarkdown;

  
  