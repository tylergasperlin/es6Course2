
//arrow function uses lexical this
//lexical = placement of this term depends on how its interpreted or evaluated
//arrow function automatically inserts this === team which allows it to work as compared to af3.js
//arrow function makes this.teamname work as we would expect
const active = () =>{

    const team = {
        members: ['jane', 'bill'],
        teamName: 'super squad',
        teamSummary: function(){
            return this.members.map(member =>{
                return `${member} is on team ${this.teamName}`
            })
        }
    }
    console.log(team.teamSummary())

 }

 export default active;

