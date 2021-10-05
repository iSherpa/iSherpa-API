'use strict'

require('dotenv').config();
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const LOCAL = process.env.LOCAL
const getParkData = require('./modules/Hike');
const activities = require('./modules/Activities');
const update = require('./modules/updateData')
const remove = require('./modules/delete')
const verifyUser  = require('./modules/auth')


app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI)



app.get('/', (request, response) => {
  response.send('working');
})

// Get Parks Data
app.get('/parks', getParkData.getParkData);
//Get Activities Data
app.get('/thingstodo', activities.getActivities);
// POST will be here
// app.post('/parks', functionHere)
// Delete Data from the DB
app.delete('/parks/:id', remove.deletePark);
// Updates Data from DB
app.put('/parks/:id', update.updateParks);












app.listen(LOCAL, () => console.log(`listening on ${LOCAL}`));