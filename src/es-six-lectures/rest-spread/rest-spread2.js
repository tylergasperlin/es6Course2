



//spread operator
const active = () =>{

    const defaultColors = ['red', 'green']
    const userFavoriteColors = ['orange', 'yellow']
    const res = defaultColors.concat(userFavoriteColors)
    console.log('old way')
    console.log(res)

    //this creates new array
    //sperad operator takes values in an array and flattens it out
    const res2 = [...defaultColors, ...userFavoriteColors]
    //note difference between the two. This one does not flatten default
    const res3 = [defaultColors, ...userFavoriteColors]

    console.log('new way')
    console.log(res2)



 }

 export default active;
