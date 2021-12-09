import React,{Component} from 'react';

import axios from 'axios';
import validate from "../api/Service/MobileService"

let details={};
let id='';

const submit=(id,mobInfo,amount)=>{
    console.log(mobInfo);
    validate(id,mobInfo,amount);
};

class MobileView extends Component{

    constructor(props){
        super(props);

        this.state={
            TrainDetail:'',
            Person:'',
            ticketId:'',

            mobInfo:{
                phone:null,
                PIN:null
            }
        };

        id=window.location.href.substring(29,43);

        axios.get('http://localhost:5000/citizen/'+id)
            .then(res => {
                details = res.data.pop();
                console.log(details);
                this.setState({TrainDetail:details.TrainDetail} );
                this.setState({Person:details.Person} );
                this.setState({ticketId:details.id});
            });
        console.log(id);

        this.onChange=this.onChange.bind(this);
        this.onClick=this.onClick.bind(this);
    }

    onChange(e) {
        const {mobInfo} = this.state;
        const currentState = mobInfo;
        const {name, value} = e.target;
        currentState[name] = value;
        this.setState({
            mobInfo: currentState
        });
    }

    onClick(e){
        submit(id,this.state.mobInfo,this.state.TrainDetail.ticketPrice);
    }

    render() {
        return(
            <div >
                <div style={title}>
                    <h2>Dialog Payment Gateway</h2>
                </div>
                <div style={body}>

                    <table style={tableStyle}>
                        <thead> <h2>Payment Details</h2></thead>
                        <tbody>
                        <tr style={cellStyle}>
                            <td>
                                <b><label>Phone Number</label></b><br/>
                                <input

                                    type='text'
                                    name="phone"
                                    value={this.state.mobInfo.phone}
                                    onChange={this.onChange}
                                />
                            </td>

                        </tr>
                        <tr style={cellStyle}>
                            <td>
                                <b><label>PIN Number</label></b><br/>
                                <input type='text'
                                       name="PIN"
                                       placeholder="Four digit number"
                                       value={this.state.mobInfo.PIN}
                                       onChange={this.onChange}
                                 />
                            </td>

                        </tr>
                        <tr style={cellStyle}>
                            <td>
                                <b><label>Amount</label></b><br/>
                                  <label style={labelStyle}>{this.state.TrainDetail.ticketPrice} Rs/=</label>
                            </td>

                        </tr><br/>
                        <tr style={btnCellStyle}>
                            <td>
                                <button style={btnStyle} onClick={this.onClick} ><b>Pay</b></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {console.log(this.state.mobInfo)}
            </div>


        );
    }
}

const title={
    textAlign:'center',
    postion:'absolute',

};
const body={
    fontSize:"17px",
    left:"420px",
    right:"320px",
    top:"100px",
    position:"absolute",
    textAlign:"left",
};

const tableStyle={
    width:"300px",
    position:"absolute",
    marginLeft:'10%',
    marginRight:'10%',

};

const cellStyle={
    height:'60px',
    border: '1px solid black'
};
const btnCellStyle={
    height:'60px',
    position:'fixed',
    left:'750px',

};

const btnStyle={
    background:'red',
    fontSize:"20px",
    color:'white',
    padding:'5px 8px',
    cursor:'pointer',
    float:'right',
    width:"80px",
    height:"50px"
};

const labelStyle={
    background:"white",
    fontWeight:"bold",
    fontSize:"20px",
    display:"block",
    width: "400px",
    height: "40px"
};
export default MobileView;