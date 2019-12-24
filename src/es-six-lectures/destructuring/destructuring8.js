



//desctructing array practical
const active = () =>{
    const points = [
        [4,5],
        [10,1],
        [0,40]
    ]
    const p = points.map(([x,y]) => {
        return {x:x, y:y}
    })

    console.log(p)
 }

 export default active;
