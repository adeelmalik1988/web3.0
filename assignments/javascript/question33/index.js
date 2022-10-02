////////Ordinal Number//////////

// let alien_color = 'Green'
// console.log('alien_color',alien_color)

const ordinalNumber1to9 = (normalNum) => {

    let ordinalNum = []

    console.log("normalNum", normalNum)

    normalNum.map( num => 
        num == 1 ? ordinalNum.push(`${num}st`) :
        num == 2 ? ordinalNum.push(`${num}nd`) :
        num == 3 ? ordinalNum.push(`${num}rd`) :
        ordinalNum.push(`${num}th`)

        
        )


console.log('ordinalNum',ordinalNum)

ordinalNum.map(ordNum => console.log(ordNum))

}

ordinalNumber1to9([1,2,3,4,5,6,7,8,9])
//ordinalNumber1to9("adeel")
//ordinalNumber1to9("taimoor")
// userGreetings("habib")

