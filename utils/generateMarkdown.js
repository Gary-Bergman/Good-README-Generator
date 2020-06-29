// function to generate markdown for README
function generateMarkdown(data) {
  // For license content
  if (data.license === "None") {
    var license = "This project did not use a license."
  } else {
    var license = `This project is licensed under the ${data.license} license.`
  };

  var html = `# ${data.title}
  
  `;

  // License Badge 
  if (data.license !== "None") {
    if (data.license === "MIT") {
      html += `![${data.license} license](https://img.shields.io/badge/license-${data.license}-blue)`;
    } else if (data.license === "APACHE 2.0") {
      html += `![${data.license} license](https://img.shields.io/badge/license-Apache%202.0-blue)`;
    } else if (data.license === "GPL 3.0") {
      html += `![${data.license} license](https://img.shields.io/badge/license-GPL%203.0-blue)`;
    } else if (data.license === "BSD 3") {
      html += `![${data.license} license](https://img.shields.io/badge/license-BSD%203-blue)`;
    }
  }

  html += `
  ## Description

  ${data.description}

  ## Table of Contents

  *  [Installation](#Installation)

  *  [Usage](#Usage)
  
  *  [License](#License)

  *  [Contributing](#Contributing)

  *  [Tests](#Tests)

  *  [Questions](#Questions)
  

  ## Installation

  To install necessary dependencies, run the following command:

 
    ${ data.install}


  ## Usage

  ${ data.usage}

  ## License
  
  ${license}

  ## Contributing

  ${ data.contribution}

  ## Tests

  To run tests, run the following command:

  ${ data.test}

  ## Questions

  If you have any questions about this repo, open an issue or contact me directly at [${ data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}).
  `;
  return html
}

module.exports = generateMarkdown;
