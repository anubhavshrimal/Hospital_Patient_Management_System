var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload=multer({dest: __dirname+'/../public/dataStore'});
var doctor = require('../Models/doctorSchema').doctor;
var patient= require('../Models/patientSchema').patient;
var session=require('../Models/session').session
var specialisation=require('../Models/specialization').specializations;
var record = require('../Models/records').records;
var prescription = require('../Models/prescriptions').prescriptions;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/',upload.single('avatar'),function(req,res){
    let body = req.body;
    body.startDate = Date.now();
    body.lastVisit = Date.now();
    body.status = "running";
    record.create(body,function(err,data){
        if(data){
            let a={ records : data._id };
            patient.findOneAndUpdate({ _id : body.patientId},{$push : a},{},function(err,data){
                res.send("done");
            });
        }
    });
});

router.post('/:recordId',upload.single('avatar'),function(req,res){
   let body = req.body;
    prescription.create(body,function(err,data){
       if(data){
           let a={ prescriptions : data._id };
           record.findOneAndUpdate({_id : req.params.recordId},{$push : a},{},function(err,data1){
               res.send("done");
           })
       }
    });
});



module.exports = router;
