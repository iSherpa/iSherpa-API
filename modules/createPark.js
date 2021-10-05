'use strict';
const Park = require('../schema/parks');
const createPark = async (request, response) => {
  try {
    let parkInfo = request.body
    let addedPark = await Park.create({
      fullName: parkInfo.fullName,
      email: parkInfo.email,
      description: parkInfo.description,
      stateCode: parkInfo.stateCode,
      directionsInfo: parkInfo.directionsInfo,
      activity: parkInfo.activity,
      operatingHours: parkInfo.operatingHours,
      contacts: parkInfo.contacts,
      })
    response.status(200).send(addedPark);
  } catch (err) {
    console.log(err);
    response.status(500).send('Error');
  }
}
module.exports= {createPark};