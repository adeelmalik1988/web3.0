///Strings equality and ineqaulity test/////
/////test 01///////////
let car = 'subaru'

console.log("Is car == 'sabaru'? I Pridict True")
console.log(car == 'subaru')

/////test 02///////////
let carColor = 'red'

console.log("Is car color == 'white'? I Pridict False")
console.log(carColor == 'white')

/////test 03///////////Numerical Test///////////
let carMileage = 12

console.log("Is car Mileage == 12? I Pridict True")
console.log(carMileage == 12)

/////test 04///////////lower case/case sensetive test////////
let carSeatsColor = 'black'

console.log("Is car Seats Color == 'Black'? I Pridict False")
console.log(carSeatsColor == 'Black')

/////test 05///////////
let carWheelDrive  = 'four-wheel drive'

console.log("Is car Wheel Drive == 'two-wheel drive'? I Pridict False")
console.log(carWheelDrive == 'two-wheel drive')

/////test 06///////////
let carSteeringWheel = 'Power'

console.log("Is car Steering Wheel == 'Power'? I Pridict True")
console.log(carSteeringWheel == 'Power')

/////test 07///////////Numerical Test///////////
let carDrivenMiles = 30000

console.log("Is car Driven Miles >= 25000? I Pridict True")
console.log(carDrivenMiles >= 25000)

/////test 08///////////
let carBreakingSystem = 'ABS'

console.log("Is car Breaking System == 'Normal' ? I Pridict False")
console.log(carBreakingSystem == 'Normal')

/////test 09///////////Numerical Tests///////////
let carSpeed0to100 = 9

console.log("Is car duraion of Speed 0 to 100km <= 10 ? I Pridict True")
console.log(carSpeed0to100 <= 10)

/////test 10///////////conditional testing//////////
let turboFeature = true
let absFeature = true

console.log("Is car has Turbo Feature == false AND Abs Feature == true ? I Pridict false")
console.log(turboFeature == false && absFeature == true)



console.log("Is car has Turbo Feature == false OR Abs Feature == true ? I Pridict true")
console.log(turboFeature == false || absFeature == true)

///////Array Test/////////

let carItem = 'Alto'
console.log("Is carItem is an Array ? I Pridict false")
console.log(Array.isArray(carItem))


let carDetails = ['Alto', 'Modal 2020','White']
console.log("Is carDetails is an Array ? I Pridict True")
console.log(Array.isArray(carDetails))