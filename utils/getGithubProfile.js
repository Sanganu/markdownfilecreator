module.exports = ({login,following,followers,email,public_repo}) =>{
    return(`# ABOUT THE AUTHOR
    
        ## GITHUB USERNAME: ${login}
            
        Email: ${email}
            
        Following: ${following}
            
        Followers: ${followers}
            
        Public repo: ${[public_repos]}`
        )
}