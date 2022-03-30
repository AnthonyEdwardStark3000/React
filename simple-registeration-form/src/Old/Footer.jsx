import React from 'react';
import ReactDom from 'react-dom';

const position ={
    textAlign: "center",
    color:"red"
}
const DateToday = new Date();
const DateDisplay = DateToday.toString();
function Footer(){
    return(
        <>
            <h2 style={position}>Wishing you a great day</h2>
            <h3 style={position}> On {DateDisplay}</h3>
        </>
    )
}

export default Footer