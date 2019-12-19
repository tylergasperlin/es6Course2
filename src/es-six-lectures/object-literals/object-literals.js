

const active = () =>{

    function createBookShop(inventory){
        return {
            inventory: inventory,
            inventoryValue: function(){
                return this.inventory.reduce((total, book)=> total + book.price, 0)
            },
            priceForTitle: function(title){
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

