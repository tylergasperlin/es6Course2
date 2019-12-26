



//this is how to create classes es6
const active = () =>{

    class Car{
        constructor({title}){
            this.title = title
        }
    
        drive(){
            return 'vroom'
        }

    }

    const car = new Car({title:'Toyota'})
    console.log(car)
    console.log(car.drive())

}


 export default active;
