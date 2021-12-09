const express = require("express");
const acc= express.Router();
const MongoId=require('mongoid');

const  accModel = require("../models/Account");



acc.post('/addAcc',(req,res)=>{
    const aData={
       Account:{

               AccountNo:req.body.Account.AccountNo,
               AccountName:req.body.Account.AccountName,
               Balance:req.body.Account.Balance,
      },
        Card:{
            cardNo:req.body.Card.cardNo,
            cardType:req.body.Card.type,
            cvcNo:req.body.Card.cvcNo,
            cardHolder:req.body.Card.cardHolder
        },
        Mobile:{
            phone:req.body.Mobile.phone,
            PIN:req.body.Mobile.PIN
        }


    };

    accModel.create(aData).then(account=>{
        res.json({ msg:"Bank details registered" })
    }).catch(err=>{
        res.send('error: ' + err)
    })


});


acc.get('/accounts',(req,res)=>{

    accModel.find().exec().then( accounts =>{
        res.json( accounts  );
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    })
});


acc.get('/:_id',(req,res)=>{
    const _id= new MongoId(req.params._id);
    accModel.find(_id).exec().then( account =>{
        res.json(account.pop()|| {} );
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});


acc.put('/:_id',(req,res)=>{
    const _id=new MongoId(req.params._id);
    accModel.updateOne({_id:_id},{$set:{"Account.Balance":req.body.Balance}}).then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});



module.exports=acc;
