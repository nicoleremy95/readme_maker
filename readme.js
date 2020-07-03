const readMeString = function (response){
    return `
# ${response.title}
 
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

![License](https://img.shields.io/badge/License-${response.license}-yellow.svg)


### Contributing 
${response.contribution}

### Tests
${response.test}

### Questions
1. [Github](${response.github})
2. [Email](${response.email})
    
    `
    console.log(readMeString);
}
    module.exports = readMeString