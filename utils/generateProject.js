module.exports = (userinput) => {
    return(`
    * ### PROJECT1: ${userinput.url}
    [![GitHub license](https://img.shields.io/badge/license-${userinput.license}-blue.svg)](https://github.com/${userinput.github}/${userinput.projectrepo})
    * ![GitHub license] (https://img.shields.io/badge/license-${userinput.license}-blue.svg)
    * *  Project URL:[ Projecturl ] (https://github.com/${userinput.github}/${userinput.projectrepo})
       
       
    *  Project title: ${[userinput.projecttitle]}
       
       
    *  Description: ${[userinput.description]}
       
       
    *  Installation: ${[userinput.installation]}
       
       
    *   Usage: ${[userinput.usage]}
           
    *   NOTE to Contributors: ${[userinput.contributions]}
    
    *   Tests: ${[userinput.tests]}
    
    *   Contact me: ${userinput.email}
   
    `)
}