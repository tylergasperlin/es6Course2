
const Field = value =>{
    this.value = value
}

const active = () =>{

    Field.prototype.validate = () => {
        return this.value.length > 0
    }
    
    var userName = new Field('2Cool')
    var password = new Field('my_password')
    
    console.log(userName.validate())
 }

 export default active;