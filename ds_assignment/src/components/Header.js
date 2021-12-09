import React,{Component} from 'react';


class Header extends Component
{
    render() {
        return(<div style={HeaderStyle}><h2>Railway Ticket Reservation System</h2></div>);
    }
}

const HeaderStyle={
    positon:'absolute',
    background:'LightGrey',
    width:'1390px',
    textAlign:'center',
    border: '3px solid Black'
};

export default Header;
