'use trict'

require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const LOCAL = process.env.LOCAL

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('working');
})













app.listen(LOCAL, () => console.log(`listening on ${LOCAL}`));