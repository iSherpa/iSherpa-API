'use strict'
const axios = require('axios');






// getparkData get() will go here. needs to call a function. is a query calls park API and gets data by state code
  
  async function getParkData(request, response) {
    const stateCode = request.query.stateCode
    const url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&key=${process.env.API_KEY}`
      const Data = await axios.get(url)
      response.send(Data.data)
      
  }

  





module.exports={getParkData};