'use strict'

require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const LOCAL = process.env.LOCAL
const hike = require('./modules/Hike');
const activities = require('./modules/Activities');
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('working');
})

app.get('/parks', hike.getParkData);
app.get('/thingstodo', activities.getActivities);












app.listen(LOCAL, () => console.log(`listening on ${LOCAL}`));