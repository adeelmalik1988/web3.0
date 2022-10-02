////////Pizzas//////////

// let alien_color = 'Green'
// console.log('alien_color',alien_color)

const favoritePizza = (favPizzaList) => {

    console.log(favPizzaList)

    let favPizzaArray = [...favPizzaList]

    console.log('favPizzaArray',favPizzaArray)

    for ( let pizza of favPizzaArray){
        console.log(pizza)
    }

    for ( let pizza of favPizzaArray){
        console.log(`I like ${pizza} pizza`)
    }

    console.log('I really Love Pizza!')


    
}

favoritePizza(['BBQ','fagita','tikka','pepperoni'])
//ordinalNumber1to9("adeel")
//ordinalNumber1to9("taimoor")
// userGreetings("habib")

