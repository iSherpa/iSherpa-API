'use strict';
const Park = require('../schema/parks');
const createPark = async (request, response) => {
  let {fullName, description, stateCode, directionsInfo, activities, operatingHours, contacts} = request.body.params;
  let newPark = {fullName, description, stateCode, directionsInfo, activities, operatingHours, contacts};
  try {
    let addedPark = new Park(newPark);
    await addedPark.save();
    response.status(200).send(addedPark);
  } catch (err) {
    console.log(err);
    response.status(500).send('Error');
  }
}
module.exports={createPark};