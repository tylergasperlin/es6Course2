
//spread operator
const active = () =>{
    ///...items is rest operator
    function validateShoppingList(...items) {
        if(items.indexOf('milk') < 0){
            ///...items in array is spread operator
            return ['milk', ...items]
        }
        return items
    }
    
    console.log(validateShoppingList('oranges', 'bread', 'eggs'))

 }

 export default active;
