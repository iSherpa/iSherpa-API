const mongoose = require('mongoose')
const { Schema } = mongoose;

/// Need to fifure out whats going here for the Schema. 
const parksSchema = new Schema({
  fullName: String,
  email: String,
  description: String,
  activities: Array,
  stateCode: String,
  directionsInfo: String,
  contactsEmail: String,
  contactsPhone: String,
  notes: String,
  images: String

});
const Park = mongoose.model('parks', parksSchema)

module.exports = Park;