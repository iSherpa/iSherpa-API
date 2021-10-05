'use strict'

require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const LOCAL = process.env.LOCAL
const getParkData = require('./modules/Hike');
const activities = require('./modules/Activities');
const { response } = require('express');
const requestDelete = require('./modules/delete')
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('working');
})

app.get('/parks', getParkData.getParkData);
app.get('/thingstodo', activities.getActivities);
app.delete('/parks/:id', requestDelete);












app.listen(LOCAL, () => console.log(`listening on ${LOCAL}`));