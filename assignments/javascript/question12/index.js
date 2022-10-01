String.prototype.toTitleCase = function() {
    return this.replace( 
        /\w\S*/g
        ,
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
        )
}


const friendsNames = ['adil', 'kashif','abdullah','noman']


    friendsNames.map(name => console.log(`Hello, my dear friend ${name.toTitleCase()}, how are you buddy !`))
