function Car(model){
    this.model = model
}


var cars =[
    new Car('Buick'),
    new Car('Camero'),
    new Car('Focus')
]


const active = () =>{

    const res = cars.find(car =>{
        return car.model === 'Focus'
    })
    console.log(res)
 
  }
 
  export default active;