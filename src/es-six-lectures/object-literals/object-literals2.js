
//this refactors object-literals.js
//note inventory was inventory:inventory = es6 we can just use inventory in this instance
const active = () =>{

    function createBookShop(inventory){
        return {
            inventory,
            inventoryValue: () => {this.inventory.reduce((total, book)=> total + book.price, 0) },
            priceForTitle: (title) =>{
                return this.inventory.find(book => book.title === title).price

            }
        }
    }

    const inventory = [
        {title: 'harry potter', price: 10},
        {title: 'javascript', price : 100}
    ]

    const bookShop = createBookShop(inventory)
    console.log(bookShop)

 }

 export default active;
