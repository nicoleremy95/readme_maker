const readMeString = function (response){
    return `
# ${response.title}

![License](https://img.shields.io/badge/License-${response.license}-yellow.svg)

### Description
${response.description}
    
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

### Installation
${response.installation}

### Usage
${response.usage} 

### License 

This application is covered under ${response.license}


### Contributing 
${response.contribution}

### Tests
${response.test}

### Questions
1. [Github](${response.github})
2. [Email](${response.email})
    
    `
}
    module.exports = readMeString