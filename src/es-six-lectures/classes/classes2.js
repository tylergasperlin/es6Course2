



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


    //inheritance
    class Toyota extends Car{
        constructor(options){
            super(options)
            this.color = options.color
        }
        honk(){
            return 'beep'
        }
    }
    const toyota = new Toyota(({color:'red', title:'daily driver'}))
    console.log(toyota.honk())
    console.log(toyota.color)
    console.log(toyota.drive())
}


 export default active;
