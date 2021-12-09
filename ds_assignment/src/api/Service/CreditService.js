import axios from 'axios'

let data='';
let c='';

  const  validate =(id,card,amount)=>{
      console.log(id);
      console.log(amount);
      console.log(card);
      console.log(card.credit);
      axios.get('http://localhost:5000/acc/accounts')
          .then(res => {

                data = res.data;
                console.log(data);
                console.log(typeof  data);
                console.log(data.length);


                alert("Verifying....");
                while(data.length !== 0){
                    c=data.pop().Card;
                    console.log(data.length);
                    console.log(c);
                    console.log(c.cardNo);

                    if(c.cardNo === card.credit)
                    {
                        withdraw(id,amount);
                    }
                }

          }).catch(err=>console.error(err));

};

const withdraw=(id,amount)=>{
    console.log(id);

    alert("Withdrawal amount is "+amount);

    axios.put('http://localhost:5000/citizen/'+id)
        .then(res => {
            console.log(res.data);
        }).catch(err =>{
        console.error(err);
    }).then(

        alert("Payment successful")

    ).then(
        sendEmail()
    );

};

const sendEmail=()=>{
     axios.post('http://localhost:5000/email/send-email')
         .then(res=>{
             res.json({msg:"confirmation message sent"})

         });
};

export default validate;


