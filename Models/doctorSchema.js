const mongoose=require('mongoose');
let Schema=require('./baseSchema');
let doctorSchema=new Schema();
require('./specialization');
require('./appointments');

doctorSchema.add({
    licenseNo:{
        type:String,
        required:true,
    },
    specialization:{
       type:mongoose.Schema.Types.ObjectId,
        ref : 'specializations',
    },
    schedule:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'appointments',
    }],

});

let doctorModel=mongoose.model('doctors',doctorSchema);

module.exports.doctor=doctorModel;