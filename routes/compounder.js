const compounderSchema=require('../Models/compounder').compounder;
const express=require('express');
const compounderRouter=express.Router();
const multer=require('multer');
var upload=multer({dest: __dirname+'/../public/dataStore'});
var Cryptr = require('cryptr'),
    cryptr = new Cryptr('myTotalySecretKey');

//compounder Send Data
compounderRouter.get('/view/:compounderID',function(req,resp){
    compounderSchema.findById(req.params.compounderID,function(err,doc){
        if(err)
            resp.send(err);
        else{
            return doc.toObject();
        }
    });
});

//compounder Login req

compounderRouter.post('/login',function(req,resp){
    let userName=req.body.userName;
    let password=req.body.password;

    compounderSchema.findOne({'userName':userName, 'password':password},function(err){
        if(err){
            resp.send(err);
        }else{
            // resp.send token
        }
    })
});

//compounder register
compounderRouter.post('/',upload.fields([{name:'document', maxCount:1}, {name:'displayPicture', maxCount:1}]),function(req,resp){
    let data=req.body;
    body.password = cryptr.encrypt(body.password);
    if(req.files)
    {
        if (req.files.document)
            data.document = req.files.documents[0].filename;
        if (req.files.displayPicture)
            data.displayPicture = req.files.displayPicture[0].filename;
    }
    let compounder=new compounderSchema(data);
    compounder.save(function(err){
        if(err){
            resp.send(err);
        }
    })
});

//compounder Delete
compounderRouter.delete('/delete/:compounderID',function(req,resp){
    compounderSchema.findByIdAndRemove(req.params.compounderID,function(err){
        if(err){
            resp.send(err);
        }else{
            resp.send('deleted')
        }
    })
});

module.exports = compounderRouter;