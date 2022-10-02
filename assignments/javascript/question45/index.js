////////Cars//////////



//const make_great = (mag_list) => mag_list = mag_list.map(mag => 'Great ' + mag)
const cars = (attr) => {

    let cars_object = new Object()

    // cars_object.manufacturer = manufacturer
    // cars_object.model = model
    // cars_object[`${name1}`] = value1
    // cars_object[`name2`] = value2

    let manufacturerExist = false
    let modalExist = false

    for ( let keys in attr ) {
        if(keys == 'manufacturer' ){
        //&& keys == 'modal' ){
            manufacturerExist = true
            //console.log(attr[keys])
        } else if(keys == 'modal' ){
            //&& keys == 'modal' ){
                modalExist = true
               // console.log(attr[keys])
            }
        

    }

    if(manufacturerExist && modalExist) {
        cars_object = {...attr}
        
    }





    console.log('Car Details :', cars_object)


}


cars({
    manufacturer: "Suzuki",
    modal: '2010',
    color: 'white',
    breaks: 'normal'
})

cars({
    manufacturer: "Suzuki",
    //modal: '2010',
    color: 'white',
    breaks: 'abs'
})

cars({
    //manufacturer: "Suzuki",
    //modal: '2010',
    color: 'white',
    breaks: 'abs'
})

cars({
    manufacturer: "Honda",
    modal: '2016',
    mileage: 12,
    breaks: 'abs'
})
