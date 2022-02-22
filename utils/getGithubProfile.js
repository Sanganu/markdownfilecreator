module.exports = ({login,following,followers,email,company,name,blog,location,public_repos}) =>{
    return(`
    
    
        ## ABOUT THE AUTHOR
    
        ## GITHUB USERNAME: ${login}
            
        Email on Github Profile: ${email}
            
        Following: ${following}
            
        Followers: ${followers}
            
        Public repo: ${public_repos}
   `
        )
}