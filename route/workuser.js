const router = require('express').Router()
const Station = require('../model/Station')
//editstationuser
router.put('/editstationuser/:_id',(req,res)=>{
const{_id}=req.params
const{pumpnumber,pumptype,intervention}=req.body
Station.findByIdAndUpdate({_id},{$set:{pumpnumber,pumptype,intervention}})
       .then(station=>res.send({"stationmodifiedbyuser": station}))
       .catch(error=>console.log(error))
})

router.get('/getstationuser',(req,res)=>{
Station.find()
       .then(station=>res.send({"stations": station}))
       .catch(error=>console.log(error))


})
module.exports=router