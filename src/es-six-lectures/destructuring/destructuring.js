
const active = () =>{

    var expense = {
        type: 'Business',
        amount: '$54 USD'
    }
    
    var type = expense.type;
    var amount = expense.amount
    
    console.log('-----------old way')
    console.log(type)
    console.log(amount)

    var expense2 = {
        type2: 'Business',
        amount2: '$54 USD'
    }

    console.log('-------------new way')
    //remove duplicate code by using destructring 
    const {type2} = expense2
    const {amount2} = expense2
    console.log(type2)
    console.log(amount2)

    console.log('------------better new way')

    var expense3 = {
        type3: 'Business',
        amount3: '$54 USD'
    }

    //remove duplicate code by using destructring 
    //the destructured name in curly brace must match property name
    const {type3,amount3} = expense3
    console.log(type3)
    console.log(amount3)

 }

 export default active;
