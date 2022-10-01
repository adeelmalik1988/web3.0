var person = "adeel"

console.log("lowercase: ",person.toLowerCase())
console.log("UPPERCASE: ",person.toUpperCase())


String.prototype.toTitleCase = function() {
    return this.replace( 
        /\w\S*/g
        ,
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
        )
}

console.log("Title Case: ",
    "adeel malik developer".toTitleCase()
    
)