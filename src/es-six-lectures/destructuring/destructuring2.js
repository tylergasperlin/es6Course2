

//destructuring using methods
const active = () =>{

    var savedFile = {
        extension: 'jpg',
        name: 'repost',
        size: 14005
    }
    console.warn('old way')
    function fileSummary(file){
        return `the file ${file.name}.${file.extension} is size ${file.size}`
    }
    console.log(fileSummary(savedFile))

    console.warn('use destructuring')
    function fileSummary2({name,extension,size}){
        return `the file ${name}.${extension} is size ${size}`
    }
    console.log(fileSummary2(savedFile))


 }

 export default active;
