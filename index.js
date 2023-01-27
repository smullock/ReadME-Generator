const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./markdown');



inquirer
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the name of the Project Title',
    },
    {
        type: 'input',
        name: 'description',
        message: ' Enter a Description of the Project',
    },
    {
        type: 'input',
        name: 'installation',
        message: ' Enter instructions on how to install',
    },
    {
        type: 'input',
        name: 'usage',
        message: ' Enter the usage of this project',
    },
    {
        type: 'list',
        name: 'license',
        message: ' Which License is used',
        choices: ['MIT','ISC','MPL'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribution information',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter instructions to test',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your contact email address',
    },
])
.then((data)=> {
    fs.writeFile('README.md', markdown(data), (err) =>
    err ? console.log(err) : console.log('Successfully created readme')
  );
});

