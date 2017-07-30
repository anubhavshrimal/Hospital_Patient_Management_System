const appointments=require('../Models/appointments').appointments;
const specialization=require('../Models/specialization').specializations;
const appointmentRouter=require('express').Router();
const patientSchema=require('../Models/patientSchema').patient;
const doctorSchema=require('../Models/doctorSchema').doctor;
var multer  = require('multer');
var upload=multer({dest: __dirname+'/../public/dataStore'});
//new appointment
appointmentRouter.post('/',upload.single('avatar'),function(req,resp){
    console.log(req.headers.token);
    console.log(req.body);
   let date=Date.parse(new Date(req.body.date));
   console.log(date);
   let symptoms=req.body.symptoms;
   let patientId=req.body.patientId;
   let doctors=findSpecialists(symptoms);
   console.log(doctors);
   if(JSON.stringify(doctors)==='[]'){
       resp.send('no doctors currently for these symptoms!');
   }else{
  schedule(doctors,date,patientId,symptoms,function(appointment){
       resp.send(appointment);
   });

   }
});


let open=Date.parse(new Date().toUTCString().replace(/(\d{2}:\d{2}:\d{2})/,"06:30:00"));
let close=Date.parse(new Date().toUTCString().replace(/(\d{2}:\d{2}:\d{2})/,"17:00:00"));


function findSpecialists(symptoms){
    let doctors=[];
    let searchText='';

    symptoms.forEach(function(symptom){
       searchText=searchText.concat(" "+symptom);
    });
    specialization.find({$text:{$search:searchText}},function(err,doc){
        if(err){
            console.log(err);
            return (err);
        }else{
            doctors=doc.doctors;
        }
    });//.sort({$score:{$meta:"textScore"}});
    return doctors;
}

function schedule(doctors,date,patientId,symptoms,cb){
    let recentTime=close;
    let recentdoc={};
    let appoint={};
    let threshhold=3*60*1000;
    doctors.forEach(function(doctor){
        console.log(doctor);
        doctorSchema.findById(doctor).select('schedule').populate('schedule').exec(function(err,doc){

            if(err){
                return err;
            }else{
                let lower=open;
                // if(lower<Date.now()){
                //     lower=Date.now()
                // }

                //in result set check doctors latest appointment
                        if(JSON.stringify(doc.schedule)!='[]') {
                            for(let i=0;i<doc.schedule.length;i++) {

                                if (Date.parse(doc.schedule[i].date) == date) {
                                    for (let time = lower; time < close - threshhold; time = time + threshhold) {

                                        if (doc.schedule[i].time != time && recentTime > time) {
                                            recentTime = time;
                                            recentdoc = doc;

                                            break;
                                        }
                                    }
                                }

                            }
                        }else{
                            recentTime=open;
                            recentdoc=doc;
                            console.log('no schedules');
                        }

                //on most recent time and doc create a schedule
                let appointment=new appointments({
                    doctorId:recentdoc['_id'],
                    doctorName:recentdoc[name],
                    patientId:patientId,
                    date:date,
                    time:recentTime,
                    status:"active",
                    symptoms:symptoms,
                });
                appointment.save(function(err){
                    if(err)
                        return err;
                });
                recentdoc.schedule.push(appointment);
                recentdoc.save(function(err){
                    if(err){
                        return err;
                    }
                });
                patientSchema.findById(patientId,function(err,doc){
                    if(err){
                        resp.send(err);
                    }else{
                        doc.appointments.push(appointment);
                        doc.save(function(err){
                            if(err){
                                return err;
                            }
                        })
                    }
                });
                cb(appointment);
            }

        })
    });

}

//rechedule

appointmentRouter.put('/',function(req,resp){
    let prevAppoint=req.body.appointmentId;
    appointments.findById(prevAppoint,function(err,doc){
        if(err){
            resp.send(err);
        }else{
            let date=doc.date;
            let recentTime=close;
            doctorSchema.findById(doc.doctorId,function(err,doctor){
                doctor.schedule.forEach(function (appointment){
                    if(appointment.date==date){
                        for(let time=lower;time<close-threshhold;time=time+threshhold) {
                            if (appointment.time != time && recentTime > time && time!=doc.time) {
                                recentTime = time;
                                break;
                            }
                        }
                    }
                })
            }).populate('schedule').select('schedule');

            doc.time=recentTime;
            doc.status='Rescheduled';
            doc.save(function(err,doc2){
                if(err)
                    resp.send(err);
                else{
                    rep.send(doc2.toObject());
                }
            });
        }
    });
});


//delete an appointment

appointmentRouter.delete('/:appointId',function(req,resp){
   let id=req.params.appointId;
   appointments.findById(id,function(err,doc){
       if(err){
           console.log(err);
           resp.send(err);
       }else{
           doctorSchema.findById(doc.doctorId,function(err,doctor){
               if(err)
                   resp.send(err);
               else{
                       let i=doctor.schedule.indexOf(id);
                       doctor.schedule.slice(i,1);
                       doctor.save();
               }
           });

           patientSchema.findById(doc.patientId,function(err,patient){
               if(err)
                   resp.send(err);
               else{
                   let i=patient.appointments.indexOf(id);
                   patient.appointments.slice(i,1);
                   patient.save();
               }
           })
           doc.remove(function (err) {
               if(err)
                   resp.send(err);
               else
                   resp.send('Success!');
           })
       }
   })
});

//followup


appointmentRouter.put('/followup',function(req,resp){
    let doctorId=req.body.doctorId;
    let patientId=req.body.patientId;
    let date=req.body.date;
    let symptoms=req.body.symptoms;
    let recentTime=close;
    doctorSchema.findById(doctorId,function(err,doctor){
          doctor.schedule.forEach(function (appointment){
              if(apointment.date==date){
                  for(let time=lower;time<close-threshhold;time=time+threshhold) {
                      if (appointment.time != time && recentTime > time && time!=doc.time) {
                          recentTime = time;
                          break;
                      }
                  }
              }
          });
    }).populate('schedule').select('schedule');

    let appointment=new appointment({
        doctorId:doctorId,
        patientId:patientId,
        date:date,
        time:recentTime,
        status:"active",
        symptoms:symptoms
    }).save(function(err){if(err){rep.send(err)}});

    doctorSchema.findById(doctorId,function(err,doctor){
       doctor.schedule.push(appointment);
       doctor.save(function(err){
           if(err)
               resp.send(err);
       })
    });
    patientSchema.findById(patientId,function(err,doc){
        if(err){
            resp.send(err);
        }else{
            doc.appointments.push(appointment);
            doc.save(function(err){
                if(err){
                    return err;
                }
            })
        }
    });

});


module.exports=appointmentRouter;