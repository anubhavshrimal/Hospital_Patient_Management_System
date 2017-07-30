const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const medicineSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    salts:{
        type:[String],
        required:true,
    },
    stock:{
        type:Number,
    }
});

let medicineModel=mongoose.model('medicines',medicineSchema);
module.exports.medicines=medicineModel;