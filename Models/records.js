const mongoose=require('mongoose');
const Schema=mongoose.Schema;
require('./patientSchema');
require('./medicalCondition');

const recordSchema=new Schema({
    prescriptions:{
        type:[Schema.Types.ObjectId],
        ref:'prescriptions',
    },
    startDate:{
        type:Date,
        required:true,
    },
    lastVisit:{
        type:Date,
        required:true,
    },
    status:{
        type:[String],
        required:true,
    },
    patientId:{
        type:Schema.Types.ObjectId,
        ref:'patients',
        required:true
    },
    medicalConditions:{
        type:[Schema.Types.ObjectId],
        ref:'medicalconditions',

    },
    clips:{
        type:[String],
    }
});

let recordModel=mongoose.model('record',recordSchema);
module.exports.records=recordModel;