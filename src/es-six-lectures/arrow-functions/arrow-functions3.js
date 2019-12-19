
//this function does not work because we defined an annonomous function
//and passing it off to somewhere else in our code base
const active = () =>{

    const team = {
        members: ['jane', 'bill'],
        teamName: 'super squad',
        teamSummary: function(){
            return this.members.map(function(member){
                return `${member} is on team ${this.teamName}`
            })
        }
    }
    console.log(team.teamSummary())

 }

 export default active;

