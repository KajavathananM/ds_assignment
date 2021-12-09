

const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const DetailSchema=new Schema({

    id:String,
   Person:{
        nicNo:String,
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
    collection:"Worker Details"
});


const DetailModel_2=mongoose.model('DetailModel_2',DetailSchema);


module.exports=DetailModel_2;