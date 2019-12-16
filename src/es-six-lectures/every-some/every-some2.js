
//introduce some
//every is like and
//some is like or
var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}

]

const active = () =>{

    var resEvery = computers.every(computer =>{
        return computer.ram>16
    })
    console.log(resEvery)

    var resSome = computers.some(computer =>{
        //if you don't have return it will return undefined
        return computer.ram>16
    })
    console.log(resSome)
 }

 export default active;