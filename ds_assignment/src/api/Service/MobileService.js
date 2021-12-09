import axios from 'axios'

let data='';

const  validate =(id,mobile,amount)=>{
    console.log(id);
    console.log(mobile);
    console.log(mobile.phone);
    console.log(mobile.PIN);

    axios.get('http://localhost:5000/acc/accounts')
        .then(res => {
            data = res.data;
            console.log(data);
            console.log(typeof  data);
            console.log(data.length);


            alert("Verifying....");
            while(data.length !== 0){
                let m=data.pop().Mobile;
                console.log(data.length);
                console.log(m);
                console.log(m.phone);
                console.log(m.PIN);

                if(m.phone === mobile.phone)
                {
                   if(m.PIN === mobile.PIN)
                   {
                       withdraw(id,amount);
                   }
                }
            }

        });
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
