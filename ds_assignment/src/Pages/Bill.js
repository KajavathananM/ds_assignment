import React from 'react';
import "../App.css";
import BillView from '../components/BillView';
import background from '../components/background.jpg';


let id='';
class Bill extends  React.Component{
    constructor(props){
        super(props);



        this.onCredit=this.onCredit.bind(this);
        this.onMobile=this.onMobile.bind(this);

         id=window.location.href.substring(27,40);
    }


    onCredit(e){
        window.location.href='/credit/'+ id;

    }

    onMobile(e){

        window.location.href='/mobile/'+ id;

    }



      render()
    {
        {console.log((id))}
        return(
            <div style={mainStyle}>
                   <BillView onCredit={this.onCredit}  onMobile={this.onMobile} id={id}/>
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

export default Bill;