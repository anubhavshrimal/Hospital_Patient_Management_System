
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const sessionSchema=new Schema({
    user:{
        type:String,
        required : true,
    },
    userType:{
        type:String,
        required : true,
    },
    expiry : {
        type : Date,
        required : true,
    }
});

let specializationModel=mongoose.model('sessions',sessionSchema);
module.exports.session=specializationModel;