const questions = [
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
            "MIT",
            "ISC",
            "BSD",
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
]

module.exports = {
    questions:questions
}