var express = require('express');
var router = express.Router();
var multer  = require('multer');
var patient = require('../Models/patientSchema').patient;
var doctor=require('../Models/doctorSchema').doctor;
var reception=require('../Models/reception').reception;
var compounder=require('../Models/compounder').compounder;
var session = require('../Models/session').session;
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');
var upload=multer({dest: __dirname+'/../public/dataStore'});
/* GET home page. */

function checkSession(token,res){
    session.findById(token,function(err,data){
        if(err){
            res.json({message : "error"});
        }
        if(data){
            if(data.expiry.getTime() > Date.now()){
                data.message = "success";
                res.json({message : "success"});
            }
            else{
                session.remove({_id : token},function(err,data){
                    if(err){
                        res.json({message : "error"});
                    }
                    else{
                        res.json({message : "expired"});
                    }
                })
            }
        }
    })
}

router.post('/',upload.single('avatar'),function(req, res) {
  let token = req.headers.token;
  let body=req.body;
  console.log(body);
  checkSession(token,res);
});

router.post('/login',upload.single('avatar'),function(req,res){
    let body = req.body;
    console.log(body);
    if(req.body.userType=='p'){
        patient.findOne({userName : body.userName},function(err,response){
            if(err){
                res.json({
                    message : "error"
                });
            }
            else if(response!=null){
              console.log(response);
                if(cryptr.decrypt(response.password)==body.password){

                    let sBody={
                        user : response._id,
                        userType : response.userType,
                        expiry : Date.now() + 24*60*60*1000
                    };
                    session.create(sBody,function(err,sData){
                        if(err){
                            res.json({
                                message : "error"
                            });
                        }
                        else{
                            // appointments.populate(docs)
                            let resp=response.toObject();


                            resp.token = sData._id;
                            resp.message = "success";
                            res.send(resp);
                        }
                    })
                }

            }
            else{
                res.json({
                    message : "error"
                });
            }
        }).populate('allergies chronicDiseases characteristics.disabilities appointments').populate('appointments.doctorId');
    }else if(req.body.userType=='d'){
        doctor.findOne({userName : body.userName},function(err,response){
            if(err){
                res.json({
                    message : "error"
                });
            }
            else if(response!=null){
                console.log(response);
                if(cryptr.decrypt(response.password)==body.password){

                    let sBody={
                        user : response._id,
                        userType : response.userType,
                        expiry : Date.now() + 24*60*60*1000
                    };
                    session.create(sBody,function(err,sData){
                        if(err){
                            res.json({
                                message : "error"
                            });
                        }
                        else{
                            let resp=response.toObject();
                            resp.token = sData._id;
                            resp.message = "success";
                            res.send(resp);
                        }
                    })
                }

            }
            else{
                res.json({
                    message : "error"
                });
            }
        })
    }else if(req.body.userType=='r'){
        reception.findOne({userName : body.userName},function(err,response){
            if(err){
                res.json({
                    message : "error"
                });
            }
            else if(response!=null){
                console.log(response);
                if(cryptr.decrypt(response.password)==body.password){

                    let sBody={
                        user : response._id,
                        userType : response.userType,
                        expiry : Date.now() + 24*60*60*1000
                    };
                    session.create(sBody,function(err,sData){
                        if(err){
                            res.json({
                                message : "error"
                            });
                        }
                        else{
                            let resp=response.toObject();
                            resp.token = sData._id;
                            resp.message = "success";
                            res.send(resp);
                        }
                    })
                }

            }
            else{
                res.json({
                    message : "error"
                });
            }
        })
    }else if(req.body.userType=='c'){
        compounder.findOne({userName : body.userName},function(err,response){
            if(err){
                res.json({
                    message : "error"
                });
            }
            else if(response!=null){
                console.log(response);
                if(cryptr.decrypt(response.password)==body.password){

                    let sBody={
                        user : response._id,
                        userType : response.userType,
                        expiry : Date.now() + 24*60*60*1000
                    };
                    session.create(sBody,function(err,sData){
                        if(err){
                            res.json({
                                message : "error"
                            });
                        }
                        else{
                            let resp=response.toObject();
                            resp.token = sData._id;
                            resp.message = "success";
                            res.send(resp);
                        }
                    })
                }

            }
            else{
                res.json({
                    message : "error"
                });
            }
        })
    }
});

router.get('/logout',upload.single('avatar'),function(req,res){
  let token = req.headers.token;
  session.remove({_id : token},function(err,data){
    if(err){
      res.json({message : "error"});
    }
    else{
      res.json({message : "success"});
    }
  })
})
module.exports = router;

