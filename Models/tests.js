const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const testSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
});

let testModel=mongoose.model('tests',testSchema);
module.exports.tests=testModel;