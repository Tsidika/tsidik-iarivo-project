const User = require("../models/User");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

exports.signup =  async(req,res)=>{
    console.log("post is running");
    bcrypt.hash(req.body.userPassword, 10)
        .then(
          userHashedPassword =>{ 
              const user = new User({     
                  id_User : new mongoose.Types.ObjectId(),
                  userMail : req.body.userMail ,
                  userPassword: userHashedPassword,      
              });
              user.save()
              .then(() => res.status(201).json({ message: 'USER CREATED SUCCESSFULLY !' }))
              .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
  
  }