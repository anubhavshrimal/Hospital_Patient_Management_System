const mongoose=require('mongoose');
let Schema=require('./baseSchema');
require('./allergies');
require('./records');
require('./medicalCondition');
require('./disabilities');
require('./appointments');
let patientSchema=new Schema();
patientSchema.add({

    fatherName:{
        title:String,
        firstName:String,
        middleName:String,
        lastName:String,
    },
    insuranceNo:{
        type:Number,
    },

    nationality:{
        type:String,
    },
    isAlive:{
        type:Boolean,
        default:true,
    },
    verified:{
        type:Boolean,
        default : false,
        required:true,
    },
    allergies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'allergies',
    }],
    records:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'records',
    }],
    chronicDiseases:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'medicalconditions',
    }],
    characteristics:{
        weight:Number,
        height:Number,
        eyeScore:Number,
        disabilities:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'disabilities',
        }],
        idMarks:[String],
    },
    appointments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'appointments',
    }],

});

let patientModel=mongoose.model('patients',patientSchema);

module.exports.patient=patientModel;