'use strict'
const verifyUser = require('./auth')
const Park = require('../schema/parks')


const deletePark = async (request, response) => {
  //verifyUser.verifyUser(request, async (error, user) => {
    //if(error){
      //response.status(404).send('Invalid Token')
    //} else {
    const id = request.query.id
        try {
        //let email = user.email
        //const findPark = await Park.find({_id: id, email})
        //if(!findPark){
          //response.status(500).send('no record found')
        //}
        //if(findPark.email !== email){
          //response.status(501).send('yYou do not have delete permission on this item')
        //}
          const deletedPark = await Park.findByIdAndDelete(id);
          response.status(200).send(deletedPark)
        } catch (error) {
          console.log(error)
          response.status(500).send(`${id} does not match our records...`)
        }
      //}
    //})
}

module.exports = {deletePark};