const recordSchema=require('../Models/records').records;
const recordRouter=require('express').Router();
const prescriptionSchema=require('../Models/prescriptions').prescriptions;
const testSchema=require('../Models/testReports').testReports;
const multer=require('multer');
const upload=multer({'dest':__dirname+'/../public/clips'});


//add new record
recordRouter.post('/',function(req,resp){
   let data=req.body;

   let record=new recordSchema(data);
   record.save(function(err){
      if(err)
          resp.send(err);
      else
          resp.send('success!');
   });
});

//edit Record
//add prescription
recordRouter.put('/:Rid',function(req,resp){
    let tests=req.body.prescription.tests;
    let testReports=[];
    tests.forEach(function(test){
        testReports.push(new testSchema({
            'type':test,
            'status':'undefined',
        }).save());
    });

    let data=req.body.prescription;
    data.tests=testReports;

   let prescription=new prescriptionSchema(data);
    prescription.save(function(err,docx){
        if(err){
            resp.send(err)
        }else{
            let diseases=req.body.medicalConditions;
            recordSchema.findById(req.params.Rid,function(err,doc){
                if(err){
                    resp.send(err);
                }else{
                    doc.prescriptions.push(docx['_id']);
                    doc.lastVisit=new Date().getDate();
                    doc.medicalConditions=diseases;
                    doc.save(function(err){
                        if(err){
                            resp.send(err);
                        }else{
                            resp.send('success!');
                        }
                    })
                }
            });
        }
    })
});

//close record
recordRouter.put('/close/:Rid',function(req,resp){
    recordSchema.findById(req.params.Rid,function(err,doc){
        if(err){
            resp.send(err);
        }else{
            doc['status']=false;
            doc.save(function(err){
                if(err){
                    resp.send(err);
                }
            })
        }
    })
});

//add clips
recordRouter.post('/clips/:Rid',upload.single('clips'),function(req,resp){
    recordSchema.findById(req.params.Rid,function(err,doc){
        if(err){
            resp.send(err);
        }else{
            doc.clips.push(req.files.filename);
            resp.send('Success!');
        }
    })
});

//upload a report
recordRouter.put('/testResults',upload.array('results'),function(req,resp){
    let testId=req.body.testId;
    testSchema.findById(testId,function(err,doc){
        if(err){
            resp.send(err);
        }else{
            doc.date=new Date().getDate();
            doc.status=req.body.status;

            if(req.files)
                doc.documents=req.files;

        }
    })
});

recordRouter.get('/:RecordId',function(req,resp){
    recordSchema.findById(req.params.RecordId,function(err,data){
        if(err)
            resp.send(err);
        else
            resp.send(data);
    }).populate('prescriptions patientId prescriptions');
});

module.exports=recordRouter;