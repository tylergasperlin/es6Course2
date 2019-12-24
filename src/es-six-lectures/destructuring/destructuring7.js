

//desctructing objects to create dynamic function params
const active = () =>{
    //used curly brace to destructure from the incoming object
    //now the parms do not need to be in order
    function signUp({userName, Password, email, dateOfBirth, city}){
        console.log(userName + Password + email +dateOfBirth + city)

    }

    const user = {
        userName: 'mName',
        Password: 'password',
        email: 'moose@gmail.com',
        dateOfBirth: '5/5/2000',
        city: 'gooseCity'
    }
    
    signUp(user)
    
    
 }

 export default active;
