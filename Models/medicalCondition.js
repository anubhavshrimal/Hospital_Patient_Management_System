const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const medicalConditionSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
    },
});

let medicalConditionModel=mongoose.model('medicalconditions',medicalConditionSchema);
module.exports.medicalConditions=medicalConditionModel;