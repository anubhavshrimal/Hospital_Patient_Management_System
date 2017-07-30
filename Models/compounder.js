const mongoose=require('mongoose');
const baseSchema=require('./baseSchema');
let compounderchema=new baseSchema();

let compounderModel=mongoose.model('compounders',compounderchema);
module.exports.compounder=compounderModel;
