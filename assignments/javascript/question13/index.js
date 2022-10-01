String.prototype.toTitleCase = function() {
    return this.replace( 
        /\w\S*/g
        ,
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
        )
}


// your Owen array

const myArray = [
    'I would like to have a Honda Motorcycle 150CC'.toTitleCase(),
    'Motorbike is very handy while traveling though messy traffic',
    'A good motorbike can give you a pleaure ride through montains/plains',
    'It is also known as quick transport as you can use lots of shortcuts'
]

myArray.map(item=>console.log(item))