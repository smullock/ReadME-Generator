
function markdown(data) {
    return `
# ${data.title}
## Description
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#Test)
* [Questions](#questions)

## Installation
${data.installation} 

## Usage 
 ${data.usage}
## License 
 ${data.license}
## Contributing 
 ${data.contributing}
## Test 
 ${data.tests}
## Questions 
Any questions , please contact me at the below details
### My Github Profile:${data.github} (https://github.com/${data.github})
### Email: ${data.email}
`

}
module.exports = markdown;