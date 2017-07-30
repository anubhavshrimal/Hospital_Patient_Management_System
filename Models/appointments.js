const mongoose=require('mongoose');
const Schema=mongoose.Schema;
require('./doctorSchema').doctor;
require('./patientSchema').patient;

let appointmentSchema=new Schema({
    doctorId:{
        type:Schema.Types.ObjectId,
        ref:'doctors',
        required:true,
    },
    doctorName:{
      type:String,
    },
    patientId:{
        type:Schema.Types.ObjectId,
        ref:'patients',
        required:true,
    },
    patientName:{
        type:String,
    },
    date:{
        type:Date,
        required:true,
    },
    time:{
      type:Number,
      required:true
    },
    status:{
        type:String,
        required:true,
    },
    symptoms:{
        type:[String],
        required:true,
    },

});

let appointmentModel=mongoose.model('appointments',appointmentSchema);
module.exports.appointments=appointmentModel;