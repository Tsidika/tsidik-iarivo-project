const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.userPassword, 10)
      .then(
        userHashedPassword =>{ 
            const user = new User({
                userName: red.body.userName,
                userFirstName : red.body.userFirstName,
                userBirthdate: red.body.userBirthdate, 
                userGender : red.body.userGender, 
                userAddress : red.body.userAddress,
                userContact : red.body.userContact,
                userMail : red.body.userMail ,
                userPassword: userHashedPassword,
                userCin: req.body.userCin,
                userProfession: red.body.userProfession,
                userPicture: red.body.userPicture
            });
            user.save()
            .then(() => res.status(201).json({ message: 'USER CREATED SUCCESSFULLY !' }))
            .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };
