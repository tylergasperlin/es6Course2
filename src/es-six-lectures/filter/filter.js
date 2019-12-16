

//filter
var products = [
   {name: 'cucumber', type: 'vegetable'},
   {name: 'banana', type: 'fruit'},
   {name: 'celery', type: 'vegetable'},
   {name: 'orange', type: 'fruit'},
]

 const active = () =>{
    console.log('old way!')
   var filteredProducts = [];
   for (var i = 0; i< products.length; i++){
      if(products[i].type === 'fruit'){
         filteredProducts.push(products[i])
      }
   }
   console.log(filteredProducts);
   console.log('new way')
   //pass function to filter that evaluates whether a statement is true
   //result is an array containing the filtered criteria 
   var p = products.filter(function(product){
      return product.type === 'fruit'
   })
   console.log(p)

 }

 export default active;