////////users greeting msg//////////

// let alien_color = 'Green'
// console.log('alien_color',alien_color)

const userGreetings = (username) => {

    let username_lists = []
    //['admin','adeel','taimoor','afaq','kashif']

    console.log("username",username)

    if(username_lists.length == 0){
        console.log('We need to find some users!')

    } else {

        
        username_lists.map( user => {
            
            
            if (user == username && username == 'admin') {
                console.log(
                    'Hello admin, would you like to see a status report?')
                    
                } else if (user == username) {
                    console.log(`Hello ${username}, thank you for logging in again`)
                    
                } 
    }
    
    )
}

    //console.log('alien_color',alien_color)

}

userGreetings("admin")
userGreetings("adeel")
userGreetings("taimoor")
// userGreetings("habib")

