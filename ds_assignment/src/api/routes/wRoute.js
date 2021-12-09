const express = require("express");
const worker = express.Router();


const  wModel = require("../models/WorkerDetails");
const MongoId=require('mongoid');



worker.post('/addPerson',(req,res)=>{
    const wData={

        id:req.body.id,
        Person:{

            nicNo:req.body.Person.nicNo,
            name:req.body.Person.name,
            contactNo:req.body.Person.contactNo,
            email:req.body.Person.email
        },
        TrainDetail:{
            start:req.body.TrainDetail.start,
            end:req.body.TrainDetail.end,
            trainNumber:req.body.TrainDetail.trainNumber,
            trainName: req.body.TrainDetail.trainName,
            date:req.body.TrainDetail.date,
            ticketQuanity:req.body.TrainDetail.ticketQuanity,
            ticketPrice:req.body.TrainDetail.ticketPrice
        },
        paid:req.body.paid
    };

    wModel.create(wData).then(worker=>{
        res.json({ msg:"Worker details added" })
    }).catch(err=>{
        res.send('error: ' + err)
    })


});

worker.get('/workers',(req,res)=>{

    wModel.find().exec().then( workers =>{
        res.json(workers);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    })
});


// worker.get('/:_id',(req,res)=>{
//     const _id=new MongoId(req.params._id);
//     wModel.findById(_id).exec().then( worker =>{
//         res.json(worker || {} );
//     }).catch(err=>{
//         console.error(err);
//         res.sendStatus(500);
//     });
// });

worker.get('/:id',(req,res)=>{
    const id= req.params.id;
    wModel.find({"id":id}).exec().then( person =>{
        res.json(person || {} );
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});


module.exports = worker;