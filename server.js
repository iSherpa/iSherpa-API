'use trict'

require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const LOCAL = process.env.LOCAL
const getParkData = require('./modules/Hike')
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('working');
})

app.get('/parks', getParkData);












app.listen(LOCAL, () => console.log(`listening on ${LOCAL}`));