const axios = require("axios");
const {argv} = require('yargs')

async function makeRequest() {


    axios('http://localhost:12345')	    
    .then(res => console.log(res.status))	    
    .then(res => console.log(res.data))
    .catch(err => console.log(err));	    

}	
setInterval(makeRequest, argv.seconds * 1000);