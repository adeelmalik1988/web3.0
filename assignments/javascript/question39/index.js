////////Cities//////////

// let alien_color = 'Green'
// console.log('alien_color',alien_color)


String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}

const city_country = (city, country) => {

    default_country = 'pakistan'

    if (country == default_country) {
        //txt = default_txt
        console.log(`${city.toTitleCase()}, ${country.toTitleCase()}`)

        
    } else {
        console.log(`${country} is not the defult country`)

    }






}

city_country('karachi', 'pakistan')
city_country('islamabad', 'pakistan')
city_country('dehli', 'india')
//ordinalNumber1to9("adeel")
//ordinalNumber1to9("taimoor")
// userGreetings("habib")

