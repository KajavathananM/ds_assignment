const express = require("express");
const info= express.Router();
const MongoId=require('mongoid');

const  infoModel = require("../models/TrainInfo");



info.post('/addInfo',(req,res)=>{
    const iData={
       Stations:req.body.Stations,
       Trains:req.body.Trains,
       Start_End:req.body.Start_End
    };

    infoModel.create(iData).then(info=>{
        res.json({ msg:"Train information is added" })
    }).catch(err=>{
        res.send('error: ' + err)
    })


});



info.get('/:_id/Stations',(req,res)=>{
    const _id=new MongoId(req.params._id);
    infoModel.findById(_id).exec().then( info =>{
        res.json(info.Stations || {} );
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

info.get('/:_id/Trains',(req,res)=>{
    const _id=new MongoId(req.params._id);
    infoModel.findById(_id).exec().then( info =>{
        res.json(info.Trains || {} );
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

info.get('/:_id/Start_End',(req,res)=>{
    const _id=new MongoId(req.params._id);
    infoModel.findById(_id).exec().then( info =>{
        res.json(info.Start_End || {} );
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports=info;
