var numbers = [1,2,3,4,5]

var numberSum = 0

const adder = number => {
    numberSum += number
}

console.log('one way')
const active = () =>{
    numbers.forEach(number => {
        //+= is the same as numberSum = numberSum + number
        numberSum += number
    });
    console.log(numberSum)
    console.log('another way')
    numberSum = 0
    numbers.forEach(adder)
    console.log(numberSum)
}


 
  export default active;