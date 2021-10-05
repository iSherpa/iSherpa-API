'use strict'

const Park = require('../schema/parks')
  async function savedParks(request, response) {
  try{
    if(request.query.email){
      let email = request.query.email;
      const fetchSavedParks = await Park.find({email})
      response.send(fetchSavedParks)    
    } else {
      response.status(404).send('No Saved Parks')
    }
    } catch (error) {
      console.log(error)
      response.status(500).send('Fatal error')
    }
  };

module.exports = {savedParks};