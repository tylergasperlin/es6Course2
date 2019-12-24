
//desctructing list of objects 
const active = () =>{

    const companies = [
        {name: 'Google', location: 'Mountain View'},
        {name: 'Facebook', location: 'Menlo Park'},
        {name: 'Uber', location: 'San Francisco'}
    ]
    
    console.error('old way')
    var location2 = companies[0].location;
    console.log(location2)

    console.error('new way')
    //first grab the first element of array = google using square brace
    //then grab location from that array using curl brace
    const [{location}, location3] = companies
    console.log(location)
    //test getting location of second element in the array
    console.log(location3)    
    console.log(location3.location)

 }

 export default active;
