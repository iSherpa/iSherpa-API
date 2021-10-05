const mongoose = require('mongoose')
const { Schema } = mongoose;

/// Need to fifure out whats going here for the Schema. 
const parksSchema = new Schema({
  fullName: String,
  email: String,
  description: String,
  stateCode: String,
  directionsInfo: String,
  activity: String,
  operatingHours: String,
  contacts: String,

});
const Park = mongoose.model('parks', parksSchema)

module.exports = Park;