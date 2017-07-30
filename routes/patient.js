var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload=multer({dest: __dirname+'/../public/dataStore'});
var patient = require('../Models/patientSchema').patient;
var session = require('../Models/session').session;
var QRCode = require('qrcode');
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');
/* Patient Api's */



router.get('/view/:id', function(req, res) {
    var id = req.params.id;
   patient.find({userName:id},function(err,response){
        if(err){
            res.json(err);
        }
        else
            res.json(response);
   }).populate('allergies chronicDiseases characteristics.disabilities appointments').populate('appointments.doctorId');
});

var cpUpload = upload.fields([{ name: 'displayPicture', maxCount: 1 }, { name: 'documents', maxCount: 1 }]);
router.post('/',cpUpload,function(req,res){
  let body = req.body;
  console.log(body);
    body.password = cryptr.encrypt(body.password);
    if(req.files) {
        if (req.files.displayPicture)
            body.displayPicture = req.files.displayPicture[0].filename;

        if (req.files.documents)
            body.documents = req.files.documents[0].filename;
    }

    patient.create(body,function(err,response){
       if(err){
           res.json(err);
       }
       else {
           QRCode.toFile(__dirname+'/../public/qrcodes/'+response._id+'.png', response.userName, {
               color: {
                   dark: '#000',
                   light: '#FFF'
               }
           }, function (err) {
               if (err) throw err
               console.log('done')
           });
           res.send(response);
       }
    });
});




module.exports = router;


function checkSession(token,res){
    session.findById(token,function(err,data){
        if(err){
            return {"message" : "error"};
        }
      if(data){
          if(data.expiry > Date.now()){
              data.message = "success";
              return data;
          }
          else{
              return {"message":"expired"}
          }
      }
    })
}