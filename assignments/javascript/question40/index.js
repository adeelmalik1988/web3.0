////////Album//////////



String.prototype.toTitleCase = function () {
    return this.replace(
        /\w\S*/g
        ,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        }
    )
}
let dictionaries =  []

const make_album = (artist, albumTitle, noOfTracks) => {
    
    let album = new Object()
    album.artist = artist.toTitleCase()
    album.title = albumTitle.toTitleCase()
    noOfTracks ? album.noOfTracks = noOfTracks : ""


   
    
    console.log(album)

    dictionaries = [...dictionaries, album]


console.log(dictionaries)


}

make_album('Ibrar', 'Bilo',12)
make_album('Atif', 'Aadat')
make_album('quratulain balouch', 'kaari kaari', 10)
//ordinalNumber1to9("adeel")
//ordinalNumber1to9("taimoor")
// userGreetings("habib")

