const axios = require("axios");

async function makeRequest() {


    axios('http://localhost:12345')	    
    .then(res => console.log(res.status))	    
    .then(res => console.log(res.data))
    .catch(err => console.log(err));	    

}	
setInterval(makeRequest, 3000);