const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const allergiesSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
});

let allergiesModel=mongoose.model('allergies',allergiesSchema);
module.exports.allergies=allergiesModel;