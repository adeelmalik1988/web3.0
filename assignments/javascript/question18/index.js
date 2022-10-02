

String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}

const sortingArrays = (tourestSpots) => {
    console.log("Original Order :",tourestSpots)
    console.log("Alphabetic Order: ",tourestSpots.slice().sort())
    console.log("Original Order :",tourestSpots)
    console.log('Alphabetic Order Reverse: ',tourestSpots.slice().sort().reverse())
    console.log("Original Order :",tourestSpots)
    console.log("Order Reverse: ",tourestSpots.reverse())
    console.log("Order Changed",tourestSpots)
    console.log("Reverse Order :",tourestSpots.reverse())
    console.log("Order Changed back to origial :",tourestSpots)
    console.log("Alphabetic Order: ",tourestSpots.sort())
    console.log("Order Changed :",tourestSpots)
    console.log('Order Changed to Reverse: ',tourestSpots.sort().reverse())
    console.log("Order Changed :",tourestSpots)








    
}

sortingArrays(['Eiffle Tower','Taj Mahal','Niagara Falls','Mount Fuji','Sydney Opera House'])