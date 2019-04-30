// =================================================
// REST API axios

const axios = require("axios")

axios
  .get("http://api.github.com/users/sarahgushef")
  .then(response => console.log(response.data))
  .catch(error => console.log(error))

/* 
  axios is require to do REST API in node js (no need browser tho * wink *)
*/
