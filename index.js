const inquirer = require("inquirer");
const fs = require("fs");
const readMeString = require("./util/readme.js")
const questions = require("./util/inquirer_prompts")

inquirer.prompt(
    questions.questions
).then(function(response){
    console.log("sucess!")
    console.log(response)
    
    fs.writeFile("READMEHW.md", readMeString(response), function(err){
        if(err){
            throw err
        }console.log("new readme written")
    })
})



