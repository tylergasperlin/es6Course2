var primaryColors = [
    {color: 'red'},
    {color: 'yellow'},
    {color: 'blue'},

]


//it is ok to mutate array with reduce 
const active = () =>{
    //previous is previous value when we last went through the loop
    var prev = primaryColors.reduce((previous, primaryColor) =>{
        previous.push(primaryColor.color)
        return previous;
    }, [])
    console.log(prev)
}
 
  export default active;