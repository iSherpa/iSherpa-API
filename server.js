'use strict';

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;
const getParkData = require('./modules/Hike');
const activities = require('./modules/Activities');
const createPark = require('./modules/createPark');
const savedParks = require('./modules/savedParks');
const update = require('./modules/updateData');
const remove = require('./modules/delete');
const verifyUser = require('./modules/auth');

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.DATABASE_MONGO_SERVER);

app.get('/', (request, response) => {
	response.send('working');
});

// Get Parks Data
app.get('/parks', getParkData.getParkData);
//Get Activities Data
app.get('/thingstodo', activities.getActivities);
//Get Saved Parks Data
app.get('/my-parks', savedParks.savedParks);
// POST will be here
app.post('/my-parks', createPark.createPark);
// Delete Data from the DB
app.delete('/my-parks/:id', remove.deletePark);
// Updates Data from DB
app.put('/my-parks/:id', update.updateParks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
