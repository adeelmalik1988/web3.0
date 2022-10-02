////////users name checking//////////

// let alien_color = 'Green'
// console.log('alien_color',alien_color)

const usernameChecking = (new_users) => {

    let current_users = ['admin', 'adeel', 'taimoor', 'afaq', 'kashif']

    console.log("new_users", new_users)

    if (current_users.length == 0) {
        console.log('We need to find some users!')

    } else {

        
        
        new_users.map(newUser => {
            let user_exits = false

            current_users.map(user => {


                if (user.toLowerCase() == newUser.toLowerCase()) {
                    console.log(`${newUser} already occupied`)

                    user_exits = true


                }

                // if (user.toLowerCase() != newUser.toLowerCase()) {
                //     console.log(`${newUser} is available`)


                // }
            })
            if( !user_exits){

                console.log(`${newUser} is available`)
            }



        }

        )
    }

    //console.log('alien_color',alien_color)

}

usernameChecking(['admin', 'Adeel', 'adil', 'habib'])
//usernameChecking("adeel")
//usernameChecking("taimoor")
// userGreetings("habib")

