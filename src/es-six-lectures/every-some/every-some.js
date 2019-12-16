var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}

]

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;





const active = () =>{
    console.log('old way!')
    for(var i = 0; i<computers.length; i++ ){
        var computer = computers[i]
    
        if(computer.ram < 16){
            allComputersCanRunProgram = false
        } else {
            onlySomeComputersCanRunProgram = true
        }
    }
    
    console.log(allComputersCanRunProgram)
    console.log(onlySomeComputersCanRunProgram)

    console.log('new way')
    var res = computers.every(computer =>{
        return computer.ram>16
    })
    console.log(res)
 }

 export default active;