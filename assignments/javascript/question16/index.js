


String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}

const changingGuestlist = (guestNotComing, newFriends) => {

    const guestsNames = ['Dr. Zia Khan', 'danial nagori', 'ali', 'murtaza']

    guestsNames.map(name => {
        if (guestNotComing !== name) {

            console.log(`Hello, ${name.toTitleCase()}, I would like to invite you at dinner tomorrow!`)
        } else {
            console.log(`${name.toTitleCase()} cannot come to dinner as he is in Karachi`)
        }

    })

    const filteredNames = guestsNames.filter(item => item !== guestNotComing)

    console.log("Guys got a bigger table, lets invite new freinds as well")

    //filteredNames.map(name=>console.log(`${name.toTitleCase()} is coming to Dinner`))

    let start
    
    if (filteredNames.length % 2 == 0) {
        start = filteredNames.length/2
        
        //console.log(filteredNames.length/2)

    } else {

        start = (filteredNames.length+1)/2

        //console.log((filteredNames.length+1)/2)


    }

    filteredNames.unshift(newFriends[0])
    filteredNames.splice(start,0,newFriends[1])
    filteredNames.push(newFriends[2])

    //console.log(filteredNames)


    filteredNames.map(name=>console.log(`${name.toTitleCase()} is invited and coming to dinner`))


    
}

changingGuestlist("ali", ['adil','kashif','asif'])