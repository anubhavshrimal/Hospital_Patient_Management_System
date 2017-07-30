var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload=multer({dest: __dirname+'/../public/dataStore'});
var doctor = require('../Models/doctorSchema').doctor;
var patient= require('../Models/patientSchema').patient;
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');
var session=require('../Models/session').session;
var specialisation=require('../Models/specialization').specializations;


router.get('/',function(req,res){
    doctor.find({},function(err,data){
        if(data)
            res.json(data);
    }).populate('specialization');
})

router.get('/view/:id', function(req, res) {
    var id = req.params.id;
    doctor.findById(id,function(err,response){
        if(err){
            res.json(err);
        }
        else
            res.json(response);
    }).populate('schedule specialization');
});


var cpUpload = upload.fields([{ name: 'displayPicture', maxCount: 1 }, { name: 'documents', maxCount: 1 }]);
router.post('/',cpUpload,function(req,res){
    let body = req.body;
    body.password = cryptr.encrypt(body.password);
    if(req.files) {
        if (req.files.displayPicture)
            body.displayPicture = req.files.displayPicture[0].filename;

        if (req.files.documents)
            body.documents = req.files.documents[0].filename;
    }
    doctor.create(body,function(err,response){
        if(err){
            res.json(err);
        }
        else {
            let specialization=response.specialization;
               specialisation.findById(specialization,function(err,doc){
                   if(err){
                       resp.send(err);
                   }else{
                       doc.doctors.push(response['_id']);
                       doc.save(function(err){
                           if(err){
                               resp.send(err);
                           }
                       })
               }
            });
            res.send(response);
        }
    });
});

router.get('/patientView/:Pid/', function(req, res) {

    var id = req.params.id;
    patient.findById(id,function(err,response){
        if(err){
            res.json(err);
        }
        else{
           let diseases= response.records.diseases;
            let searchText='';
            let doctors=[];
            diseases.forEach(function(disease){
                searchText=searchText.concat(" "+disease);
            });
            specialization.findOne({$text:{$search:searchText}},{$score:{$meta:"textcore"}})
                .sort({$score:{$meta:"textcore"}})
                .exec(function(err,doc){
                    if(err){
                        return (err);
                    }else{
                        doctors=doc.doctors;
                    }
                });
            let token = req.headers.token;
            session.findById(token,function(err,doc){
               if(err){
                   resp.send('err');
               }else{

               }
            });

        }
    }).populate('records');
});

module.exports = router;
