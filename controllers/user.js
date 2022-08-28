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
                  userFirstName: req.body.userFirstName ,
                  userLastName : req.body.userLastName ,
                  userBirthdate: req.body.userBirthdate , 
                  userGender : req.body.userGender , 
                  userAddress : req.body.userAddress ,
                  userContact : req.body.userContact ,
                  userMail : req.body.userMail,
                  userPassword: userHashedPassword ,
                  userCin: req.body.userCin,
                  userProfession: req.body.userMail ,
                  userPicture: req.body.userPicture ,   
              });
              user.save()
              .then(() => res.status(201).json({ message: 'USER CREATED SUCCESSFULLY !' }))
              .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
  
  }
  
exports.login = (req,res,next) => {
    User.findOne({userMail:req.body.userMail})
    .then(user => {
        if (!user){
            return res.status(401).json({message: "User not found"})
        }
        bcrypt.compare(req.body.userPassword,user.userPassword)
        .then(valid => {
            if (!valid){
                return res.status(401).json({error:"Incorret password" })
            }
            res.status(200).json({
               
                userId: user._id,
                token : jwt.sign(
                    {userId: user._id},
                    'ISPM_TRES_SUCRE_2022',
                    {expiresIn: '24h'}
                )
                
            });
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
}