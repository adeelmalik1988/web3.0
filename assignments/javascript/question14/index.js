String.prototype.toTitleCase = function() {
    return this.replace( 
        /\w\S*/g
        ,
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
        )
}


const guestsNames = ['Dr. Zia Khan', 'danial nagori','ali','murtaza']


    guestsNames.map(name => console.log(`Hello, ${name.toTitleCase()}, I would like to invite you at dinner tomorrow!`))
