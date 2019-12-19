const active = () =>{

    //es6 allows you to set a default param value
    function makeAjaxRequest(url,method = 'GET'){
        return method;

    }
    console.log(makeAjaxRequest('google.com'))
    console.log(makeAjaxRequest('google.com', 'POST'))
    console.log(makeAjaxRequest('google.com', null)) //method does got get redefined

}

 export default active;