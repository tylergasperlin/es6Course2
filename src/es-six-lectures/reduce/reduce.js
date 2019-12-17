var numbers = [10,20,30]
var sum = 0;

  
const active = () =>{
    console.log('old way!')
    for (var i = 0; i< numbers.length; i ++){
        sum +=numbers[i]
    }

    console.log(sum)

    //initial value is 0 and gets passed into the function and sent to iterater function for each iteration. 
    //the 0 is added to each number in the number array along with sum
    //reduce is like every-some where it returns one value
    console.log('new way')
    var red = numbers.reduce((sum,number) => {
        return sum + number;
    },0) //you pass an inital value to reduce thus the ,0 as second arguement
    console.log(red)
}
 
  export default active;