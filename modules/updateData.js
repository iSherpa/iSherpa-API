const Park = require ('../schema/parks')


const updateParks = async (request, response) => {
  let id = request.query.id;
  try {
    const updatedActivities = await Park.findByIdAndUpdate(id, {...request.body}, {new: true});
    response.status(201).send(updatedActivities);
  } catch (err){
    console.log(error)
    response.status(400).send('Failed to update');
  }
};
module.exports = {updateParks};
