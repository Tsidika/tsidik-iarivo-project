const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {type:String,required:true},
    userFirstName : {type:String,required:true},
    userBirthdate: {type:String,required:true}, 
    userGender : {type:String,required:true}, 
    userAddress : {type:String,required:true},
    userContact : {type:String,required:true},
    userMail : {type:String,required:true},
    userPassword: {type:String,required:true},
    userCin: {type:Number,required:true},
    userProfession: {type:String,required:true},
    userPicture: {type:String,required:true},
});

module.exports = mongoose.model('User',userSchema);
