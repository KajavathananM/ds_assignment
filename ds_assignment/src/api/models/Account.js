const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const AccSchema=new Schema({

      Account:
           {
               AccountNo:String,
               AccountName:String,
               Balance:Number,
               type:Object
           },
        Card:{
            cardNo:String,
            cardType:String,
            cvcNo:String,
            cardHolder:String,
            type:Object
        },
        Mobile:{
            phone:String,
            PIN:String,
            type:Object
        }


},{
    collection:"Bank Account"
});


const AccModel=mongoose.model('AccModel',AccSchema);


module.exports=AccModel;

