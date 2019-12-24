

//good use of rest and spread is when you need to pass arguments to another method
const active = () =>{

    const MathLibrary = {
        //using rest here to pass whatever goes to calcualteProduct
        calculateProduct(...rest) {
            console.warn('Please use multiply method instead. CalculateProduct is deprecated')
            return this.multiply(...rest)
        },
        multiply(a,b) {
            return a * b
        }
    }


    console.log(MathLibrary.calculateProduct(3,2))
    console.log(MathLibrary.multiply(3,2))

 }

 export default active;
