

//for each
//if you need to iterate use foreach instead of traditional loop
var colors = ['red','blue','green'];

  const active = () =>{
     console.log('old way!')
     for (var i = 0; i<colors.length; i++){
        console.log(colors[i])
    }
    console.log('new way')
    //foreach available for each array we work with
    colors.forEach(color => {
        console.log(color)
    })
 
  }
 
  export default active;