const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    companyName: {type: String,required:true},
    companyLogo: {type:String,required:true},
    companyCreationDate : {type:Date,required:true},
    companyAddress : {type:String,required:true},
    companyContact : {type:String,required:true},
    companyMail : {type:String,required:true},
    companyActivities: {type:String,required:true},
    companyPayementMethod : {type:Boolean,required:true},
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

module.exports = mongoose.model('company',companySchema);
