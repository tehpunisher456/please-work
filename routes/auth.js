const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")


router.get('/', (req, res)=>{
    res.send("hello")
})

router.post('/signup',(req, res)=>{
   const {name, email, password, userName} = req.body
   if(!email || !password || !name || !userName){
       res.status(422).json({error:"please fill out all the fields"})
   }
   User.findOne({email: email})
   .then((savedUser)=>{
       if(savedUser){
           return res.status(422).json({error: "An account with that email already exists"})
       }
       const user = new User({
           email,
           password,
           name,
           userName
       })
       user.save()
       .then(user=>{
           res.json({message: "User saved successfully"})
       })
       .catch(err =>{
           consolelog(err)
       })
   })
.catch
})

module.exports = router