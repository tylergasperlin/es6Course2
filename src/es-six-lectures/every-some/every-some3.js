
var names = [
    'Alexandria',
    'Matthew',
    'Joe'
]

const active = () =>{

    var resEvery = names.every( name =>{
        return name.length > 4
    })
    console.log(resEvery)

    var someEvery = names.some( name =>{
        return name.length > 4
    })
    console.log(someEvery)
 }

 export default active;