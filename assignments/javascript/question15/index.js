String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}

const changingGuestlist = (guestNotComing) => {

    const guestsNames = ['Dr. Zia Khan', 'danial nagori', 'ali', 'murtaza']

    guestsNames.map(name => {
        if (guestNotComing !== name) {

            console.log(`Hello, ${name.toTitleCase()}, I would like to invite you at dinner tomorrow!`)
        } else {
            console.log(`${name.toTitleCase()} cannot come to dinner as he is in Karachi`)
        }

    })

    const filteredNames = guestsNames.filter(item => item !== guestNotComing)

    console.log(filteredNames)

    filteredNames.map(name=>console.log(`${name.toTitleCase()} is coming to Dinner`))


    
}

changingGuestlist("murtaza")


