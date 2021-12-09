import React,{Component} from 'react';

import axios from 'axios';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CustomerForm from "./CustomerForm";


let TDetail=[];

const Statement=(props)=>{
     TDetail.push(props);
     console.log(props);
};



class TrainForm extends Component
{

    constructor (props) {
        super(props);
        var today = new Date();

        this.state = {
            Stations:[],
            Trains:[],
            Start_End:[],

            price:null,

            TrainDetail:{
                start:null,
                end:null,
                trainNumber:null,
                trainName:null,
                date: today,
                ticketQuanity:null
            }
      };

        this.onDateChange = this.onDateChange.bind(this);
        this.onChange = this.onChange.bind(this);


        this.dateFormat=this.dateFormat.bind(this);

        // this.getPrice=this.getPrice.bind(this);
    }


    onClick(e)
    {

    }


    onChange(e){
        const {TrainDetail}=this.state;
        const currentState=TrainDetail;
        const {name,value}=e.target;
        currentState[name]=value;
        this.setState({
            TrainDetail:currentState
        });

    }


    dateFormat(date){
        var dd = date.getDate();
        var mm = date.getMonth()+1; //January is 0!
        var yyyy = date.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        return  dd + '/' + mm + '/' + yyyy;
    }

    onDateChange(date) {
        this.setState({
            TrainDetail:{date: date}
        });

    }

    // getPrice=(start,end)=>{
    //
    //     console.log(start);
    //     this.state.Stations.map((station)=>{
    //         console.log(station.price);
    //         if(start===station.start && end=== station.end)
    //         {
    //             console.log(station.price);
    //             return this.state.Start_End.price;
    //         }
    //     })
    //
    // };

    componentWillMount() {

       axios.get('http://localhost:5000/info/5cddad037ed2b030a8007ff8/Stations')
            .then(res => {
                const Stations= res.data;
                this.setState({Stations: Stations});
            });


        axios.get('http://localhost:5000/info/5cddad037ed2b030a8007ff8/Trains')
            .then(res => {
                const Trains= res.data;
                this.setState({Trains: Trains});

            });
        axios.get('http://localhost:5000/info/5cddad037ed2b030a8007ff8/Start_End')
            .then(res => {
                const Start_End= res.data;
                this.setState({Start_End: Start_End});

            });
        console.log(this.state.Trains);
        console.log( this.state.Stations);
        console.log(this.state.Start_End);

    }

    render() {
        return(

            <div style={leftStyle}>
                <div style={{left:"200px",right:"300px", position:"absolute", width:"299px"}}>
                    <h3>Train details</h3>
                </div><br/><br/><br/>
                <table style={tableStyle}>
                    <tbody>

                        <tr style={cellStyle}>
                            <td>
                                <b><label>Date</label></b>
                            </td>
                            <td>
                                <DatePicker
                                    name="date"
                                    value={this.state.TrainDetail.date}
                                    selected={ this.state.TrainDetail.date}
                                    onChange={ this.onDateChange}
                                    dateFormat={this.dateFormat(this.state.TrainDetail.date)}
                                />
                            </td>
                        </tr>

                       <tr style={cellStyle}>
                           <td>
                               <b><label>Starting Point</label></b>
                           </td>
                           <td>
                               <select name ="start"
                                       style={ {width:"400px" ,height:"30px",fontSize:"16px"}}
                                       onChange = {this.onChange}>

                                   {
                                       <option value="" disabled selected>Select starting point</option>
                                   }

                                   {


                                       this.state.Stations.map((station)=>{

                                           return <option key={station.id} value={station.name} >{station.name}</option>
                                       })
                                   }
                               </select>


                           </td>
                       </tr>
                       <tr style={cellStyle}>
                           <td>
                               <b><label>Destination Point</label></b>
                           </td>
                           <td>
                               <select name ="end"
                                       style={{width:"400px" ,height:"30px" ,fontSize:"16px"}}
                                       onChange = {this.onChange}>
                                   {
                                       <option value="" disabled selected>Select destination point</option>
                                   }

                                   {
                                       this.state.Stations.map((station)=>{

                                           return <option value={station.name} >{station.name}</option>
                                       })
                                   }
                               </select>
                           </td>
                       </tr>

                       <tr style={cellStyle}>
                           <td>
                               <b><label>Train Number</label></b>
                           </td>
                           <td>
                               <select
                                           name ="trainNumber"
                                           style={{width:"400px" ,height:"30px" ,fontSize:"16px"}}
                                           onChange = {this.onChange}>

                                   {
                                       <option value="" disabled selected>Select Train Number</option>
                                   }
                                   {
                                       this.state.Trains.map(train=>{
                                           return <option value ={train.TrainNo}>{train.TrainNo}</option>
                                       })
                                   }
                               </select>
                           </td>
                       </tr>
                       <tr style={cellStyle}>
                           <td>
                               <b><label>Train Name</label></b>
                           </td>
                           <td>
                               <select
                                   name="trainName"
                                   style={{width:"400px" ,height:"30px" ,fontSize:"16px"}}
                                   onChange = {this.onChange}>

                                   {
                                       <option value="" disabled selected>Select Train Name</option>
                                   }
                                   {
                                       this.state.Trains.map(train=>{
                                           return <option value ={train.TrainName}>{train.TrainName}</option>
                                       })
                                   }
                               </select>
                           </td>
                       </tr>
                       <tr style={cellStyle}>
                           <td>
                               <b><label>Ticket Price</label></b>
                           </td>
                           <td>
                               <label style={labelStyle}>200 Rs/= per person</label>
                           </td>
                       </tr>
                       <tr style={cellStyle}>
                           <td>
                               <b><label>Number of tickets</label></b>
                           </td>
                           <td>
                               <input type="text"
                                    name="ticketQuanity"
                                    value={this.state.TrainDetail.tickets}
                                    onChange={this.onChange}
                               />
                           </td>
                       </tr>

                    </tbody>

                </table>
                {Statement(this.state.TrainDetail)}
                <CustomerForm  {...this.props} TrainDetail={TDetail} />
            </div>

        );
    }

}




const leftStyle={
    position:'fixed',
    margin:'auto',
    background:'LightGrey',
    width:'600px',
    height:'500px',
    textAlign:'left',
    border: '3px solid Black',
    borderTopStyle:'none',
    top: '190px',
};
const cellStyle={
    height:'50px'
};

const tableStyle={
    width:"500px",
    marginLeft:'10%',
    marginRight:'10%'
};




const labelStyle={
    background:"white",
    fontWeight:"500",
    fontSize:"18px",
    display:"block",
    width: "400px",
    height: "40px"
};
export default TrainForm;
