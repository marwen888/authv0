const router = require('express').Router()
const Station = require('../model/Station')


//add station
router.post('/addstation',(req,res)=>{
    const{name,code,pumpnumber,pumptype,intervention}=req.body
    const station= new Station({name,code,pumpnumber,pumptype,intervention})
    station.save()
       .then(station=>res.send({"station": station}))
       .catch(error=>console.log(error))


})
//get station
router.get('/getstation',(req,res)=>{
Station.find()
       .then(station=>res.send({"stations": station}))
       .catch(error=>console.log(error))


})
//editstation
router.put('/editstation/:_id',(req,res)=>{
const{_id}=req.params
const{name,code,pumpnumber,pumptype,intervention}=req.body
Station.findByIdAndUpdate({_id},{$set:{name,code,pumpnumber,pumptype,intervention}})
       .then(station=>res.send({"stationmodified": station}))
       .catch(error=>console.log(error))
})
//deletesation
router.delete('/deletestation/:_id',(req,res)=>{
const{_id}=req.params
Station.findByIdAndDelete({_id})
       .then(station=>res.send({"station has been delete": station}))
       .catch(error=>console.log(error))
})
module.exports=router