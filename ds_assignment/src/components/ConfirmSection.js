import React,{Component} from 'react';
import Railway from './Railway.PNG';
import axios from 'axios';



const Statement=(props1,props2)=>{
    console.log(props1);
    console.log(props2);
};


const extract=(props)=>{
  let detail=props.pop();
  return detail
};


class ConfirmSection extends Component
{
    constructor (props) {
        super(props);
        this.state = {

            TrainDetail: this.props.TrainDetail,
            Person:this.props.Person
        };
       this.onSubmit=this.onSubmit.bind(this);
     }
    onSubmit(e){
        e.preventDefault();

        let TrainDetail=extract(this.state.TrainDetail);
        let Person=extract(this.state.Person);
        console.log(TrainDetail);
        console.log(Person);

            axios
                .post('http://localhost:5000/citizen/addPerson',

                    {
                        id:Date.now(),
                        Person:{
                            name:Person.name,
                            contactNo:Person.contactNo,
                            email:Person.email
                        },
                        TrainDetail:{
                            start:TrainDetail.start,
                            end:TrainDetail.end,
                            trainNumber:TrainDetail.trainNumber,
                            trainName: TrainDetail.trainName,
                            date:TrainDetail.date,
                            ticketQuanity: TrainDetail.ticketQuanity,
                            ticketPrice: 200*TrainDetail.ticketQuanity
                        },
                        paid:false
                    }

                )
                .then(res => {
                    console.log('Reservation details succesfully saved');
                    let user=JSON.parse(res.config.data);
                    window.location.href='/bill/'+user.id;
                });






    }



    render() {
        return(
            <div style={rightStyle}>
                <form>
                    <div><img src={Railway} width="200px" height="330px" alt="Railway"/></div>
                    <div style={downStyle}><button style={btnStyle} onClick={this.onSubmit}>View Bill</button></div>
                </form>
                {Statement(this.state.Person,this.state.TrainDetail)}
            </div>

       );

    }


}

const rightStyle={
    position:'fixed',

    left:'1300px',
    background:'LightGrey',
    width:'200px',
    height:'500px',
    textAlign:'left',
    border: '3px solid Black',
    borderTopStyle:'none',
    top: '190px',
};
const btnStyle={
    background:'red',
    color:'white',
    padding:'5px 8px',
    cursor:'pointer',
    float:'right',
    width:"110px",
    height:"50px"
};

const downStyle={
    margin: 'auto',
    width:"80px",
    padding:'10px',
    position: 'absolute',
    left:'70px',
    right:'80px',
    top: '350px',

};
export default ConfirmSection;