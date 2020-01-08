// functions that we can enter and exit multiple times

// * indicates generator
// .next is returned
// yield triggers
const active = () =>{
    function* numbers(){
        yield;
    }

    const gen= numbers();
    console.log(gen.next())
    console.log(gen.next())
}
 
export default active;
