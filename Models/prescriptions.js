const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const prescriptionSchema=new Schema({
    appointmentId:{
        type:Schema.Types.ObjectId,
        ref:'appointments',
        required:true,
    },
    medicines:{
        type:[Schema.Types.ObjectId],
        ref:'medicines',
        required:true,
    },
    symptomes:{
        type:[String],
    },
    allergies:{
        type:Schema.Types.ObjectId,
        ref:'allergies',
    },
    testReports:{
        type:[Schema.Types.ObjectId],
        ref:'testreports',
    },
    precautions:[{
        type:String,
    }],
    // suggestedTest:{
    //     type:Schema.Types.ObjectId,
    //     ref:'tests',
    // },
});

let prescriptionModel=mongoose.model('prescriptions',prescriptionSchema);
module.exports.prescriptions=prescriptionModel;