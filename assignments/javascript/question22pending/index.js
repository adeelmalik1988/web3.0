

String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}
let items = []


items.push('Pakistan')
items.push('India')
items.push('K2')
items.push('Indus River')
items.push('Peshawar')
items.push('Dubai')
items.push('Saudi Arabia')


console.log(items[7])





