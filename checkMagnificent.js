const axios = require("axios");
const { argv } = require("yargs");

let url = "http://localhost:12345";
let countErrors = 0;
let countSuccess = 0;

async function makeRequest() {
  axios
    .get(url)
    .then((res) => {
      countSuccess++;
      console.log(`${res.data} Successful check!`);
      console.log(`Failed: ${countErrors}  Successful: ${countSuccess}`);
    })
    .catch(function (error) {
      if (error) {
        countErrors++;
        console.log(`Request failed with status code ${error.response.status}`);
        console.log(`Failed: ${countErrors}  Successful: ${countSuccess}`);
      }
    });
}

setInterval(makeRequest, argv.seconds * 1000);
