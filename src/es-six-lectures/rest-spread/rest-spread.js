


const active = () =>{

    function addNumbers(numbers){
        return numbers.reduce((sum,number) =>{
            return sum + number;
        }, 0)
    }
    console.log(addNumbers([1,2,3,4])
    )

    
    console.log('lets spread')
    //lets spread
    //... = rest operator 
    //numbers is unknown 
    //capture arguments and put into the numbers array
    function addNumbers2(...numbers){

        return numbers.reduce((sum,number) =>{
            return sum + number;
        }, 0)
    }
    console.log(addNumbers2(1,2,3,4,5)
    )

 }

 export default active;
