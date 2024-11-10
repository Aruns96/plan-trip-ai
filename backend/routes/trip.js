const express = require('express')

const router = express.Router()
const Trip = require("../models/trip")

router.post('/', async (req, res) => {
    try {
        const data = req.body.tripData
        
        const trip = new Trip({tripData:data});
        await trip.save();
       return res.json(trip);
    } catch (error) {
        return  res.status(500).json({error:error})
    }
   
  });
  router.get('/:id',async(req,res)=>{
    try {
        const id = req.params.id
       const trip = await Trip.findById(id)
       return res.json(trip);
    } catch (error) {
        return  res.status(500).json({error:error})
    }
  })

module.exports = router