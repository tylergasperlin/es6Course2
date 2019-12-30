

//this is how to create classes pre es6
//see classes 2 for the es6 way
const active = () =>{
    console.error('old way')
    function Car(options) {
        this.title = options.title
    }
    
   Car.prototype.drive = function(){
        return 'vroom'
    }

    const car = new Car({title: 'Focus'})


    console.log(car.drive())
    console.log(car)

    console.error('pre es6 way')
    function Toyota(options){
        Car.call(this,options)
        this.color = options.color
    }

    Toyota.prototype = Object.create(Car.prototype)
    Toyota.prototype.constructor = Toyota

    Toyota.prototype.honk = function(){
        return 'beep'
    }

    const toyota = new Toyota({color:'red', title:'daily Driver'})
    console.log(toyota)
    console.log(toyota.drive())
    console.log(toyota.honk())

 }

 export default active;
