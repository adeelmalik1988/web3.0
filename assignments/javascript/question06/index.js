var person = "adeel \t malik\t developer \n"

console.log("white spaces: ",person)

 patern = /\w\S*/g

 console.log(person.match(patern))

person.match(patern).map(str=>console.log(str))

