

//find = use when you have a list of objects and you want to find a particular object instead of loop
var users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'},

 ]
 
  const active = () =>{
    console.log('old way!')
        var user;
        for (var i = 0; i <users.length; i++)
        if(users[i].name ==='Alex'){
            user = users[i]
            break
        }
        console.log(user)

    console.log('new way')
        var u = users.find(function(user){
            //triple equal returns true or false 
            return user.name === 'Alex'
        })
        

    console.log(u)
    console.log('arrow')
        var uA = users.find(user =>{
            return user.name === 'Alex'
        })
    console.log(uA)
 
  }
 
  export default active;