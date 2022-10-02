////////Animals//////////

// let alien_color = 'Green'
// console.log('alien_color',alien_color)

const animals = (animalList) => {

    console.log(animalList)

    let animalsArray = [...animalList]

    console.log('animalsArray',animalsArray)

    for ( let animal of animalsArray){
        console.log(animal)
    }

    for ( let animal of animalsArray){
        console.log(`A ${animal} would make a great pet`)
    }

    console.log('Any of these animals would make a great pet!')


    
}

animals(['cat','dog','rabbit'])
//ordinalNumber1to9("adeel")
//ordinalNumber1to9("taimoor")
// userGreetings("habib")

