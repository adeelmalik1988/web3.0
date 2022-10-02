////////Magician//////////



String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}



const show_magicians = (magicians_list) => {

    let magicians_array = [...magicians_list]


    for (let magician_name of magicians_array) {
        console.log(magician_name)

    }

    //make_great(magicians_array)


}


show_magicians(['David Copperfield', 'Doug Henning', 'Siegfried and Roy', 'Ricky Jay'])
// show_magicians('Atif', 'Aadat')
// show_magicians('quratulain balouch', 'kaari kaari', 10)
//ordinalNumber1to9("adeel")
//ordinalNumber1to9("taimoor")
// userGreetings("habib")

