

const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const DetailSchema=new Schema({

   id:String,
   Person:{
      name:String,
      contactNo:String,
      email:String
   },
    TrainDetail:{
        start:String,
        end:String,
        trainNumber:String,
        trainName: String ,
        date:Date,
        ticketQuanity:Number,
        ticketPrice:Number

    },
    paid:Boolean
},{
    collection:"Citizen Details"
});


const DetailModel_1=mongoose.model('DetailModel_1',DetailSchema);


module.exports=DetailModel_1;




