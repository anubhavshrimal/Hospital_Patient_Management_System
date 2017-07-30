const mongoose=require('mongoose');
const baseSchema=require('./baseSchema');
let adminSchema=new baseSchema();

let adminModel=mongoose.model('admins',adminSchema);
module.exports.admin=adminModel;
