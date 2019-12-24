
//destructuing arrays
const active = () =>{

    const companies = [
        'Google',
        'Facebook',
        'Uber'
    ]
    //desctucturing arrays must use square brace rather than curly braces
    const [name, name2, name3, name4] = companies;
    console.log(name)
    console.log(name2)
    console.log(name3)
    console.log(name4) //can reach outside bounds of array = returns undefined

 }

 export default active;
