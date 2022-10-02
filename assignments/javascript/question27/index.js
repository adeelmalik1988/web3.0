////////Alien Color Test//////////

// let alien_color = 'Green'
// console.log('alien_color',alien_color)

const alienColorTest = (alien_color) => {
    console.log('alien_color',alien_color)

    if (alien_color == 'green') {
        console.log(
            'The Player Just Earned 05 Points')

    } else if (alien_color == 'yellow') {
        console.log('The player just earned 10 points')

    } else if (alien_color == 'red') {
        console.log('The player just earned 15 points')

    }
}

alienColorTest("green")
alienColorTest("yellow")
alienColorTest("red")

