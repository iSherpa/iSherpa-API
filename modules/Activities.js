'use strict'
const axios = require('axios');

async function getActivities(request, response) {

    const parkCode = request.query.parkCode
    const url = `https://developer.nps.gpv/api/v1/thingstodo?parkCode=${parkCode}&api_key=${process.env.API_KEY}`
    const Data = await axios.get(url)
    response.send(Data.data)

}

module.exports={getActivities};