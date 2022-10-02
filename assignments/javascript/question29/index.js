////////Favorite Fruit//////////

// let alien_color = 'Green'
// console.log('alien_color',alien_color)

const favoriteFruit = (favFruit) => {

    let favorite_fruits = ['mango','banana','apple']

    console.log("favFruit",favFruit)
    
    favorite_fruits.map( fruit => {


        if (fruit == favFruit && favFruit == 'mango') {
            console.log(
                'Mango is the King of Fruits')
    
        } else if (fruit == favFruit && favFruit == 'banana') {
            console.log('Banana shake seems great')
    
        } else if (fruit == favFruit && favFruit == 'apple') {
            console.log('One Apple a day keeps Doctor away')
    
        }
    }

    )

    //console.log('alien_color',alien_color)

}

favoriteFruit("apple")
favoriteFruit("banana")
favoriteFruit("pineapple")

