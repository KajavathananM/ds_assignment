const express = require("express");
const citizen = express.Router();
// const MongoId=require('mongoid');

const  cModel = require("../models/CitizenDetails");

citizen.post('/addPerson',(req,res)=>{
    const cData={

        id:req.body.id,
        Person:{
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

    cModel.create(cData).then(person=>{
        res.json({ msg:"Person details added" })
    }).catch(err=>{
        res.send('error: ' + err)
    })


});

citizen.get('/citizens',(req,res)=>{

    cModel.find().exec().then( people =>{
        res.json(people);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    })
});

// citizen.get('/:_id',(req,res)=>{
//     const _id=new MongoId(req.params._id);
//     wModel.findById(_id).exec().then( worker =>{
//         res.json(worker || {} );
//     }).catch(err=>{
//         console.error(err);
//         res.sendStatus(500);
//     });
// });


citizen.get('/:id',(req,res)=>{
    const id= req.params.id;
    cModel.find({"id":id}).exec().then( person =>{
        res.json(person || {} );
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

citizen.put('/:id',(req,res)=>{
    const id=req.params.id;
    cModel.update({id:id},{$set:{paid:true}}).then(()=>{
        res.json({msg:"Paid status updated as true"});
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});


module.exports = citizen;