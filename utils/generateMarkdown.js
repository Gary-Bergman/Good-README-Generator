// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![GitHub license]](https://img.shields.io/apm/l/pack)

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

  This project is licensed under the ${ data.license} license.

  ## Contributing

  ${ data.contribution}

  ## Tests

  To run tests, run the following command:

  ${ data.test}

  ## Questions

  If you have any questions about this repo, open an issue or contact me directly at [${ data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}).
  `;
}

module.exports = generateMarkdown;
