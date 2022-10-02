

String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}
let contiresName = []

const countiresList = (countryName) => {


    contiresName.push(countryName)

    console.log("Countries list :",contiresName)

  
}

// countiresList('Pakistan')
// countiresList('India')
// countiresList('K2')
// countiresList('Indus River')
// countiresList('Peshawar')
// countiresList('Dubai')
// countiresList('Saudi Arabia')



const country = new Object()

country.name = 'Pakistan'
country.city = 'Islamabad'
country.launguage = 'Urdu'
country.river = 'Indus River'




console.log(country)