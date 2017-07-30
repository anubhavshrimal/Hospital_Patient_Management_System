const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const disabilitySchema=new Schema({
    name:{
        type:String,
        required:true,
    },
});

let disabilityModel=mongoose.model('disabilities',disabilitySchema);
module.exports.disabilities=disabilityModel;