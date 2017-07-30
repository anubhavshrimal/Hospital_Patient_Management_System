const mongoose=require('mongoose');
const baseSchema=require('./baseSchema');
let receptionSchema=new baseSchema();

let receptionModel=mongoose.model('receptions',receptionSchema);
module.exports.reception=receptionModel;