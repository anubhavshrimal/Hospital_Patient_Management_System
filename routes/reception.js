const receptionSchema=require('../Models/reception').reception;
const express=require('express');
const receptionRouter=express.Router();
const multer=require('multer');
var upload=multer({dest: __dirname+'/../public/dataStore'});;

var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');
//Reception Send Data
receptionRouter.get('/view/:receptionID',function(req,resp){
    receptionSchema.findById(req.params.receptionID,function(err,doc){
       if(err)
           resp.send(err);
       else{
           return doc.toObject();
       }
    });
});

//Reception Login req

receptionRouter.post('/login',function(req,resp){
   let userName=req.body.userName;
   let password=req.body.password;

   receptionSchema.findOne({'userName':userName, 'password':password},function(err,doc){
       if(err){
           resp.send(err);
       }else{
           // resp.send token
       }
   })
});

//Reception register
receptionRouter.post('/',upload.fields([{name:'document', maxCount:1}, {name:'displayPicture', maxCount:1}]),function(req,resp){
    let data=req.body;
    data.password = cryptr.encrypt(data.password);
    if(req.files.document)
    data.document=req.files.filename;
    if(req.files.displayPicture)
        data.displayPicture=req.files.filename;
    let reception=new receptionSchema(data);
    reception.save(function(err,post){
        if(err){
            resp.send(err);
        }
        else{
            resp.json(post)
        }
    })
});

//Reception Delete
receptionRouter.delete('/delete/:receptionID',function(req,resp){
    receptionSchema.findByIdAndRemove(req.params.receptionID,function(err){
        if(err){
            resp.send(err);
        }else{
            resp.send('deleted')
        }
    })
});
module.exports = receptionRouter;