

String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}
let items = new Array(5)


// items.push('Pakistan')
// items.push('India')
// items.push('K2')
// items.push('Indus River')
// items.push('Peshawar')
// items.push('Dubai')
// items.push('Saudi Arabia')
items.fill('array with fixed length')

//Object.seal(items)

//items.push("new entry")

items.splice(10,0,"new entry")

console.log(items)





