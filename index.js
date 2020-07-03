const inquirer = require("inquirer");
const fs = require("fs");
const readMeString = require("./readme.js")
const questions = require("./inquirer_prompts")

inquirer.prompt(
    questions.questions
).then(function(response){
    console.log("sucess!")
    console.log(response)
    
    fs.writeFile("README.md", readMeString(response), function(err){
        if(err){
            throw err
        }console.log("new readme written")
    })
})



