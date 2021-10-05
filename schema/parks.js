const mongoose = require('mongoose')
const { Schema } = mongoose;

/// Need to fifure out whats going here for the Schema. 
const parksSchema = new Schema({
  parkName: "String",
  stateCode: "String",
  description: "String",
  directionsInfo: "String",
  activities: [],
  operatingHours: "String",
  contacts: "String",
});

const Park = mongoose.model('parks', parksSchema)

module.exports= Park;