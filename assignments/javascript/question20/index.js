

String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}
let itemList = []

const addItemList = (item) => {


    itemList.push(item)

    itemList.map(item=>console.log(item))

  
}

addItemList('Pakistan')
addItemList('India')
addItemList('K2')
addItemList('Indus River')
addItemList('Peshawar')
addItemList('Dubai')
addItemList('Saudi Arabia')


