import React,{Component} from 'react';
import axios from 'axios'


let details;
let id='';

let dateFormat=(date)=>{
     date=new Date(date);
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

};

class BillView extends Component
{
    constructor (props) {
        super(props);

        this.state={
            TrainDetail:'',
            Person:'',
            ticketId:''
        };
        id=this.props.id;
        console.log(id);
        axios.get('http://localhost:5000/citizen/'+id)
            .then(res => {
                details = res.data.pop();
                console.log(details);
                this.setState({TrainDetail:details.TrainDetail} );
                this.setState({Person:details.Person} );
                this.setState({ticketId:details.id});
            });


    }



    render() {
        {console.log(this.state.TrainDetail.date)}
        return(

            <div style={title}>
                    <h2>Receipt</h2>
                    <div style={body}>
                        <table style={tableStyle}>
                            <tbody>
                            <tr style={cellStyle}>
                                <td style={HeadStyle}>
                                    <label><b>Ticket ID</b></label>
                                </td>
                                <td style={cellStyle} >
                                    <label><b>{this.state.ticketId}</b></label>
                                </td>
                            </tr>
                            <tr style={cellStyle}>
                                <td style={HeadStyle}>
                                    <label><b>Train Number</b></label>
                                </td>
                                <td style={cellStyle} >
                                    <label><b>{this.state.TrainDetail.trainNumber}</b></label>
                                </td>
                            </tr>
                            <tr style={cellStyle}>
                                <td style={HeadStyle}>
                                    <label><b>Train Name</b></label>
                                </td>
                                <td style={cellStyle} >
                                    <label><b>{this.state.TrainDetail.trainName}</b></label>
                                </td>
                            </tr>
                            <tr style={cellStyle}>
                                <td style={HeadStyle}>
                                    <label><b>Starting Point</b></label>
                                </td>
                                <td style={cellStyle} >
                                    <label><b>{this.state.TrainDetail.start}</b></label>
                                </td>
                            </tr>
                            <tr style={cellStyle}>
                                <td style={HeadStyle}>
                                    <label><b>Destination Point</b></label>
                                </td>
                                <td style={cellStyle} >
                                    <label><b>{this.state.TrainDetail.end}</b></label>
                                </td>
                            </tr>
                            <tr style={cellStyle}>
                                <td style={HeadStyle}>
                                    <label><b>Date</b></label>
                                </td>
                                <td style={cellStyle} >
                                    <label><b> {dateFormat(this.state.TrainDetail.date)}</b></label>
                                </td>
                            </tr>
                            <tr style={cellStyle}>
                                <td style={HeadStyle}>
                                    <label><b>Number of tickets</b></label>
                                </td>
                                <td style={cellStyle} >
                                    <label><b>{this.state.TrainDetail.ticketQuanity}</b></label>


                                </td>
                            </tr>
                            <tr style={cellStyle}>
                                <td style={HeadStyle}>
                                    <label><b>Total Ticket Price</b></label>
                                </td>
                                <td style={cellStyle} >
                                    <label><b>{this.state.TrainDetail.ticketPrice}</b></label>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div style={downStyle1}><button style={btnStyle} onClick={this.props.onCredit} ><b>Payment through card</b></button></div>
                    </div>
                    <div>
                        <div style={downStyle2}><button style={btnStyle} onClick={this.props.onMobile} ><b>Payment through mobile</b></button></div>
                    </div>
                {console.log(this.props.TrainDetail)}
                </div>

        );

    }


}


//table properties
const title={
    textAlign:"center"
};
const body={
   fontSize:"25px",
   left:"1200px",
   textAlign:"left",
   right:"1200px"

};


const downStyle1={
    margin: 'auto',
    width:"80px",
    padding:'10px',
    position: 'absolute',
    left:'1210px',
    right:'280px',
    top: '250px',

};
const downStyle2={
    margin: 'auto',
    width:"80px",
    padding:'10px',
    position: 'absolute',
    left:'1210px',
    right:'180px',
    top: '390px',

};

//table properties
const tableStyle={
    position:'absolute',
    width:"500px",
    marginLeft:'10%',
    marginRight:'10%',
    border: '1px solid black',
    left:"400px"
};


const cellStyle={
    height:'60px',
    backgroundColor:"White",
    border: '1px solid black'
};
const HeadStyle={
    height:'60px',
    width:'210px',
    border: '1px solid black',
    backgroundColor:"Orange",
    fontColor:"white"
};

const btnStyle={
    background:'red',
    fontSize:"20px",
    color:'white',
    padding:'5px 8px',
    cursor:'pointer',
    float:'right',
    width:"190px",
    height:"90px"
};


export default BillView