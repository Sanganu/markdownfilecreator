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
        validate: function(input){
           
            if(  input == ""){
                return "Please enter Github username"
            }
            else{
                return true;
            }
        }
    },
    {
        type:"input",
        message:"what is your email address?",
        name:"email",
        validate: function(input){
            let regexp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
            if(regexp.test(input)){
                return true;
            }else{
                return "Please enter a valid email"
            }
        }
    },
    {
        type:"input",
        message:"what is your project repo?",
        name:"projectrepo",
        validate: function(input){
           
            if(  input == ""){
                return "Please enter Github username"
            }
            else{
                return true;
            }
        }
    },
    {
        type: "input",
        message:"what is your project title?",
        name:"projecttitle",
        validate: function(input){
            let regexp = new RegExp('[a-zA-z]+-?[a-zA-Z]');
            if(regexp.test(input)){
                return true;
            }else{
                return "Please enter a valid Title"
            }
        }
    },
    {
        type: "input",
        message:"what is your description?",
        name:"description",
        validate: function(input){
        
            if(  input == ""){
                return "Please enter project description"
            }
            else{
                return true;
            }
        }
    },
    {
        type:"input",
        message:"what were your installations?",
        name:"installation",
        default: "npm i",
        validate: function(input){
         
            if(  input == ""){
                return "Please enter installation instructions"
            }
            else{
                return true;
            }
        }
    },
    {
        type:"input",
        message:"what is your usage terms?",
        name:"usage",
        validate: function(input){
         
            if(  input == ""){
                return "Please enter usage terms"
            }
            else{
                return true;
            }
        }
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
        name:"contributions",
        validate: function(input){
            console.log(input)
            if(  input == ""){
                return "Please enter contributors to the project"
            }
            else{
                return true;
            }
        }
    },
    {
        type:"input",
        message:"what were your tests?",
        name:"tests",
        default:"npm test",
        validate: function(input){
        
            if(  input == ""){
                return "Please enter testing requirements"
            }
            else{
                return true;
            }
        }
    }
])
.then(async (response) => {
    console.log("user",response,`https://api.github.com/users/${response.github}`)
    userinput = await generateProject(response);
     return axios.get(`https://api.github.com/users/${response.github}`) 
}).then( async (apiresponse) => {
    console.log(apiresponse.data)
    let githubTEXT = await githubProfile(apiresponse.data)
    return  `
# ABOUT THIS PROJECT
${userinput}

${githubTEXT}
    `
    
})
.then(function(data){
    fs.writeFileSync("./OUTPUTREADME.md", data)
})
.catch( error => {
    console.log("Error in generating markdown file ",error)
})
}

initfunction() 