const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const testReportSchema=new Schema({
   type:{
       type:Schema.Types.ObjectId,
       ref:'tests',
       required:true,
   },
   status:{
       type:String,
       required:true,
   },
   documents:{
       type:[String],
   },
   date:{
       type:Date,
   },
   // prescriptionId:{
   //     type:Schema.Types.ObjectId,
   //     ref:'prescriptions',
   // },
});

let testReportModel=mongoose.model('testreports',testReportSchema);
module.exports.testReports=testReportModel;