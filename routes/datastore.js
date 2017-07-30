const router=require('express').Router();
const allergies=require('../Models/allergies').allergies;
const disablities=require('../Models/disabilities').disabilities;
const medicines=require('../Models/medicines').medicines;
const specializations=require('../Models/specialization').specializations;
const medicalConditions=require('../Models/medicalCondition').medicalConditions;

router.get('/allergies',function(req,resp){
    console.log('request');
   allergies.find({},function(err,data){
       if(err){
           resp.send(err);
       }else{
           resp.send(data);
       }
   });
});


router.get('/disablities',function(req,resp){
    disablities.find({},function(err,data){
        if(err){
            resp.send(err);
        }else{
            resp.send(data);
        }
    });
});


router.get('/medicines',function(req,resp){
    medicines.find({},function(err,data){
        if(err){
            resp.send(err);
        }else{
            resp.send(data);
        }
    });
});


router.get('/specializations',function(req,resp){
    specializations.find({},function(err,data){
        if(err){
            resp.send(err);
        }else{
            resp.send(data);
        }
    });
});


router.get('/medicalConditions',function(req,resp){
    medicalConditions.find({},function(err,data){
        if(err){
            resp.send(err);
        }else{
            resp.send(data);
        }
    });
});

module.exports=router;