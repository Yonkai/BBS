//Run with node client...
//(Note: Using the 'postman' application is a way better tool for testing/using routes like this)
var axios = require('axios');

const runSeedGenRoute = function runSeedGenRoute(){
    axios.post('http://localhost:4000/seed/database', {
        test: `Test`,
      })
}

runSeedGenRoute();