//Run with node client...
var axios = require('axios');

const runSeedGenRoute = function runSeedGenRoute(){
    axios.post('http://localhost:4000/seed/database', {
        test: `Test`,
      })
}

runSeedGenRoute();