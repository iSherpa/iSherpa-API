'use strict';
const Park = require('../schema/parks');
const createPark = async (request, response) => {
  try {
    let parkInfo = request.body
    let addedPark = await Park.create({
      fullName: parkInfo.fullName,
      email: parkInfo.email,
      description: parkInfo.description,
      activities: parkInfo.activities,
      stateCode: parkInfo.stateCode,
      directionsInfo: parkInfo.directionsInfo,
      contactsEmail: parkInfo.contactsEmail,
      contactsPhone: parkInfo.contactsPhone,
      notes: parkInfo.notes,
      images: parkInfo.images
      })
    response.status(200).send(addedPark);
  } catch (err) {
    console.log(err);
    response.status(500).send('Error');
  }
}
module.exports= {createPark};