

const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema=new Schema({

    Stations:[
        {
            stationId:String,
            name:String
        }
    ],

     Trains:[
         {
             TrainNo:String,
             TrainName:String
         }
     ],
    Start_End:[
        {
            id:String,
            start:String,
            end:String,
            price:Number
        }
    ]

},{
    collection:"TrainInformation"
});


const InfoModel=mongoose.model('InfoModel',InfoSchema);


module.exports=InfoModel;

