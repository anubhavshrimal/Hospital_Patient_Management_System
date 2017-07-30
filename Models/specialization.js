const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const specializationSchema=new Schema({
    description:{
        type:String,
    },
    name:{
        type:String,
        required:true,
    },
    doctors:{
        type:[Schema.Types.ObjectId],
        ref:'doctors',
    },
    medicalCondition:{
        type:[Schema.Types.ObjectId],
        ref:'medicalconditions',
    }
});

let specializationModel=mongoose.model('specializations',specializationSchema);
module.exports.specializations=specializationModel;