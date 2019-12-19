
const active = () =>{

    const double = function(number){
        return 2 * number;
    }
    
    console.log(double(8))


    console.log('use arrow function')
    const double2 = number => {
        return 2 * number;
    }
    console.log(double2(16))


    console.log('another arrow function!')
    const double3 = number => 2 * number 
    console.log(double3(32))

    console.log('another another arrow function!!!!!')
    const double4 = (number1,number2 )=> {
        return 2* number1 +2 * number2
    }
    console.log(double4(32, 32))

    console.log('practical arrow function!!!!!')
    const numbers = [1,2,3]

    console.log('boring function :(')
    const bfunc = numbers.map(function(number){
        return 2 * number
    })
    console.log(bfunc)

    console.log('arrow function!!!!')
    const afunc = numbers.map(number=> {
        return 2 * number
    })

    console.log('compact arrow function!!@!%!#%!#%')
    const cfunc = numbers.map(number => 2* number)
    console.log(cfunc)
 }

 export default active;