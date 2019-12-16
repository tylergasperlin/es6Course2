

//filter
var products = [
    {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10, price: 15},
    {name: 'celery', type: 'vegetable', quantity: 30, price: 13},
    {name: 'orange', type: 'fruit', quantity: 3, price: 5},
 ]
 
  const active = () =>{
    //type is veg; quan is > 0 ; price 0
    const res = products.filter(function(product){
        return product.type ==='vegetable' 
        && product.quantity > 0 
        && product.price < 20
    })
    console.log(res);
  }
 
  export default active;