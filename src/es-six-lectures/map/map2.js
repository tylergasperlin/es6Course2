var cars = [
    {model: 'Buick', price: 'CHEAP'},
    {model: 'Camaro', price: 'EXPENSIVE'},

]

//use map to pluck off a property of each object
const active = () =>{
    var prices = cars.map( car =>{
        return car.price
    })
    console.log(prices)
}
 
  export default active;