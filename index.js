const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "what would you like to name your title?",
        name: "title"
    },
    {
        type:"input",
        message:"what would you like to say in your description?",
        name: "description"
    },
    {
        type:"input",
        message:"what would you like for your installation instructions?",
        name: "installation"
    },
    {
        type:"input",
        message:"what would you like for your usage information?",
        name: "usage"
    },
    {
        type:"input",
        message:"what would you like to say in your contribution guidelines?",
        name: "contribution"
    },
    {
        type:"input",
        message:"what would you like to say in your test instructions?",
        name: "test"
    },
    {
        type:"list",
        message: "what type of license would you like?",
        name: "license",
        choices: [
            "Academic Free License v3.0",
            "Apache license 2.0",
            "Artistic license 2.0",
            "Boost Software License 1.0	",
            "BSD 2-clause 'Simplified' license",
            "BSD 3-clause 'New' or 'Revised' license"
        ]
    },
    {
        type: "input",
        message: "what is your github username?",
        name:"github"
    },
    {
        type:"input",
        message:"what is your email address?",
        name: "email"
    }
]).then(function(response){
    console.log("sucess!")
    console.log(response)
    const readMeString = `# Title
 
    ### Description
    ${response.description}
    
    ## Table of Contents
   
    
    #### Installation
    ${response.installation}
    
    #### Usage
    ${response.usage} 
    
    #### License
    ${response.license}
    
    #### Contributing 
    ${response.contribution}
    
    #### Tests
    ${response.test}
    
    #### Questions
    ${response.github}
    ${response.email}`
    console.log(readMeString);
    fs.writeFile("README.md", readMeString, function(err){
        if(err){
            throw err
        }console.log("new readme written")
    })
})



