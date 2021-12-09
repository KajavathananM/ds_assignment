import React,{Component} from 'react';
import MobileView from '../components/MobileView';
import background from "../components/background.jpg";


let id='';

class MobilePayment extends Component
{

    constructor(props){
        super(props);
        id=window.location.href.substring(29,43);
        console.log(id);
    }
    render() {
        return(
            <div style={mainStyle}>
                <MobileView id={id}/>
            </div>
        );

    }
}
const mainStyle={
    position:'fixed',
    backgroundImage:`url(${background})`,
    width:"1390px",
    borderTopStyle:'none',
    border: '3px solid Black',
    height:"600px",
    top:'170px'
};
export default MobilePayment;