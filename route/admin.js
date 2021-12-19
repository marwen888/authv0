const router = require('express').Router()
const User = require('../model/User')
//add user
router.post('/adduser',(req,res)=>{
    const{name,password,email,role}=req.body
    const user= new User({name,password,email,role})
    user.save()
       .then(user=>res.send({"user": user}))
       .catch(error=>console.log(error))


})

//get user
router.get('/getuser',(req,res)=>{
User.find()
       .then(user=>res.send({"users": user}))
       .catch(error=>console.log(error))


})
//edituser
router.put('/edituser/:_id',(req,res)=>{
const{_id}=req.params
const{name,password,email,role}=req.body
User.findByIdAndUpdate({_id},{$set:{name,password,email,role}})
       .then(user=>res.send({"usermodified": station}))
       .catch(error=>console.log(error))
})
//deleteuser
router.delete('/deleteuser/:_id',(req,res)=>{
const{_id}=req.params
User.findByIdAndDelete({_id})
       .then(user=>res.send({"user has been delete": station}))
       .catch(error=>console.log(error))
})
module.exports=router