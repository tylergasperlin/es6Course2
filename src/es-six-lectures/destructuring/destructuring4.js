


//destructuing arrays
//can use the rest operator 
const active = () =>{

    const companies = [
        'Google',
        'Facebook',
        'Uber',
        'Lyft'
    ]

    //use rest operator
    const [name, ...rest] = companies;
    console.log(name)
    //rest is an array of the remaining
    console.log(rest)

 }

 export default active;
