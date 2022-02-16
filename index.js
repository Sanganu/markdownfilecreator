const inquirer = require("inquirer");
const axios = require("axios");
const githubProfile = require("./utils/getGithubProfile");
const generateProject = require("./utils/generateProject");
const fs = require("fs");


const initfunction = () =>{
var userinput;
inquirer.prompt([
    {
        type:"input",
        message:"what is your github username?",
        name:"github",
    },
    {
        type:"input",
        message:"what is your email address?",
        name:"email",
    },
    {
        type:"input",
        message:"what is your project repo?",
        name:"projectrepo",
    },
    {
        type: "input",
        message:"what is your project title?",
        name:"projecttitle"
    },
    {
        type: "input",
        message:"what is your description?",
        name:"description"
    },
    {
        type:"input",
        message:"what were your installations?",
        name:"installation",
        default: "npm i"
    },
    {
        type:"input",
        message:"what is your usage terms?",
        name:"usage"
    },
    {
        type:"list",
        message:"what are your licenses?",
        choices: ["MIT","ISC","APCAHE 2.0","None"],
        name:"license"
    },
    {
        type:"input",
        message:"what should your contributors know?",
        name:"contributions"
    },
    {
        type:"input",
        message:"what were your tests?",
        name:"tests",
        default:"npm test"
    }
])
.then(async (response) => {
    console.log(response)
    userinput = await generateProject(response);
     return axios.get(`https://api.github.com/users/${response.github}`) 
}).then( async (apiresponse) => {
    console.log("API RESPONSE",apiresponse.data)
    let githubTEXT = await githubProfile(apiresponse.data)
    return  `
# ABOUT THIS PROJECT
${userinput}

${githubTEXT}
    `
    
})
.then(function(data){
    fs.writeFileSync("./README.md", data)
})
.catch( error => {
    console.log("Error in generating markdown file ",error)
})
}

initfunction() 