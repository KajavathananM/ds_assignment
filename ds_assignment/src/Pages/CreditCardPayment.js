import React,{Component} from 'react';
import CreditView from '../components/CreditView';
import background from "../components/background.jpg";

let id='';

    class CreditCardPayment extends Component
{
   constructor(props){
       super(props);
       id=window.location.href.substring(29,43);
       console.log(id)
   }
   render() {
       return(
           <div style={mainStyle}>
               <CreditView id={id}/>
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
export default CreditCardPayment;