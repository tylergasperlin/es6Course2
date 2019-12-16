var cars = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Camaro', price: 'EXPENSIVE'},

]
  
const active = () =>{
    var prices = cars.map( car =>{
        return car.price
    })
    console.log(prices)
    

}
 
  export default active;