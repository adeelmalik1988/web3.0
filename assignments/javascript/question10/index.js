//Adeel Malik
//date 01 Oct 2022
//This program is been written in javascript which is revealing fav num in the message


var favNum = 10

message = `Your fav number is ${favNum}`

console.log(message)



// this program is to write Title case by using regix in it i.e. /\w\S*/g

/*
regix used can be explained:

/   /: this will include the whole expersion
\w: this means all digits means A word character is a character a-z, A-Z, 0-9, including _ (underscore).
\S: The \S metacharacter matches non-whitespace characters
*: The n* quantifier matches any string that contains zero or more occurrences of n.
/g: Search global 

*/
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