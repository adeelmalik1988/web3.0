////////Stages of Life//////////

// let alien_color = 'Green'
// console.log('alien_color',alien_color)

const stagesOfLife = (personAge) => {
    console.log('personAge', personAge)

    if (personAge < 2) {
        console.log(
            'The person is a baby')

    } else if ((personAge >= 2 && personAge < 4)) {
        console.log('The person is a toddler')

    } else if ((personAge >= 4 && personAge < 13)) {
        console.log('The person is a kid')

    } else if ((personAge >= 13 && personAge < 20)) {
        console.log('The person is a Teenager')

    } else if ((personAge >= 20 && personAge < 65)) {
        console.log('The person is a Adult')

    } else if (personAge >= 65) {
        console.log('The person is a Elder')

    }
}

stagesOfLife(1)
stagesOfLife(10)
stagesOfLife(18)
stagesOfLife(35)
stagesOfLife(70)

