'use strict'
// const verifyUser = require('./auth)
// const { verifyUser } = require('./auth')
const Park = require('../schema/parks')


const deletePark = async (request, response) => {
  // verifyUser(request, async (error, user) => {
  //   if(error){
  //     response.status(404).send('Invalid Token')
  //   } else {}
  // })
  // const email = user.email -> user param from above. 
  let id = request.parms.id
  try {
    await Park.findByIDAndDelete(id)
    response.statuse(200).send('Successfully Deleted')
  } catch (error) {
    console.log(error)
    response.status(500).send(`${id} does not match our records...`)
  }
}

module.exports = deletePark;