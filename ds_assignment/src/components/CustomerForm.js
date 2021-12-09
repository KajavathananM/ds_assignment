import React,{Component} from 'react';
import ConfirmSection from "./ConfirmSection";

let pDetail=[];

const Statement=(props1,props2)=>{
    pDetail.push(props1);
    console.log(props1);
    console.log(props2);
};

class CustomerForm extends Component
{
    constructor (props) {
        super(props);

        this.state = {

            TrainDetail: this.props.TrainDetail,
            Person:{
               nicNo:null,
               name:null,
               contactNo:null,
               email:null
            }

        };
       this.onChange=this.onChange.bind(this);

    }

    onChange(e){
        const {Person}=this.state;
        const currentState=Person;
        const {name,value}=e.target;
        currentState[name]=value;
        this.setState({
            Person:currentState
        });
    }
    render() {
        return(
            <div style={rightStyle}>
                <div style={{left:"100px",right:"200px", position:"absolute"}}>
                    <h3 style={{textAlign:'center'}}>Customer Details</h3>
                </div><br/><br/><br/>

                <table style={tableStyle}>
                    <tbody>
                    <tr style={cellStyle}>
                        <td>
                            <b><label>Name</label></b>
                        </td>
                        <td>
                            <input
                                type='text'
                                name="name"
                                value={this.state.Person.name}
                                onChange={this.onChange}
                            />
                        </td>
                    </tr>
                    <tr style={cellStyle}>
                        <td>
                            <b><label>NIC No</label></b>
                        </td>
                        <td>
                            <input
                                type='text'
                                placeholder="NIC no should be of 10 digits"
                                name="nicNo"
                                value={this.state.Person.nicNo}
                                onChange={this.onChange}
                            />
                        </td>

                    </tr>
                    <tr style={cellStyle}>
                        <td>
                            <b><label>Contact Number</label></b>
                        </td>
                        <td>
                            <input type='text'
                                   name="contactNo"
                                   value={this.state.Person.contactNo}
                                   onChange={this.onChange}
                            />
                        </td>
                    </tr>
                    <tr style={cellStyle}>
                        <td>
                            <b><label>Email</label></b>
                        </td>
                        <td>
                            <input type='text'
                                   name="email"
                                   value={this.state.Person.email}
                                   onChange={this.onChange}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>

                { Statement(this.state.Person,this.state.TrainDetail) }

                <ConfirmSection  {...this.props}  TrainDetail={this.state.TrainDetail}  Person={pDetail}/>
            </div>);
      }

}

const rightStyle={
    position:'absolute',
    margin:'auto',
    left:'600px',
    backgroundColor:'LightGrey',
    width:'585px',
    height:'500px',
    textAlign:'left',
    border: '3px solid Black',
    borderTopStyle:'none',
    bottom: '180px',
    top: '180px',

};
const cellStyle={
    height:'50px'
};
const tableStyle={
  width:"500px",
  marginLeft:'10%',
  marginRight:'10%'
};

export default CustomerForm;