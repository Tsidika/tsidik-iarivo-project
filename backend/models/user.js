const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    ownerName: {type:String,required:true},
    ownerFirstName : {type:String,required:true},
    ownerBirthdate: {type:String,required:true}, 
    ownerGender : {type:String,required:true}, 
    ownerAddress : {type:String,required:true},
    ownerContact : {type:String,required:true},
    ownerMail : {type:String,required:true},
    ownerCin: {type:Number,required:true},
    ownerProfession: {type:String,required:true},
    ownerPicture: {type:String,required:true},
});

module.exports = mongoose.model('user',userSchema);
