// functions that we can enter and exit multiple times

// * indicates generator
// .next is returned
// yield triggers
const active = () =>{
    function* shopping(){
        //stuff on sidewalk
        
        //walking down sidewalk

        //go into the store with cash

       const stuffFromStore = yield 'cash'

        //walking back home
        return stuffFromStore
    }

    //side in the shoppig store
    const gen = shopping(); //this does not invoke code
    console.log(gen.next()) //leaving house
    //walked into store
    //walked up and down aisles
    //overright cash with groceries. the generator picks up from where it left off
    console.log(gen.next('groceries')) //leaving the store with groceries 
}
 
export default active;
