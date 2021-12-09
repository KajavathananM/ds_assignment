import React from 'react';
import "./App.css";
import Header from './components/Header';
import TrainForm from './components/TrainForm';


import MobilePayment from './Pages/MobilePayment';
import CreditCardPayment from './Pages/CreditCardPayment';
import Bill from './Pages/Bill';

import {Route } from 'react-router-dom';

class App extends React.Component{



    render() {
       return (

               <div className="app">
                   <div style={mainStyle}>
                       <Header/>
                       <Route exact path="/" render={props=>(
                           <TrainForm />

                       )}/>
                       <Route path='/bill/:id'  component={Bill}/>
                       <Route path='/credit/:id' component={CreditCardPayment}/>
                       <Route path='/mobile/:id' component={MobilePayment}/>
                   </div>
               </div>

       );

   }
}
const mainStyle={
    padding:'10px',
    position: 'absolute',
    left:'100px',
    right:'220px',
    top: '100px',
    bottom: '10px'
};

export default App;
