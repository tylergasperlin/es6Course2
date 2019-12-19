const active = () =>{

    function User(id){
        this.id = id;
    }
    
    function generateId() {
        return Math.random() * 9999999;
    }
    
    
    function createAdminUser(user = new User(generateId())){
        user.admin = true;
        return user
    }
    ////instead of having to create  a new user first we can
    ////use the default argument to create the user for us
    //const user = new User(generateId())
    //createAdminUser(user)
    console.log(createAdminUser())

}

 export default active;