var numbers = [1,2,3]
var doubledNumbers = [] 
  
const active = () =>{
console.log('old way!')
    for(var i = 0; i<numbers.length; i++ ){
        //adding to this so we don't have to mutate
        // avoid mutating where possible
        doubledNumbers.push(numbers[i] * 2) 
    }
    console.log(doubledNumbers)

console.log('new way')

var doubled = numbers.map(number =>{
    return number * 2
})

console.log(doubled)


}
 
  export default active;