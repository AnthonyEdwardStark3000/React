import React from "react";
import ReactDom from "react-dom";
const timeNow = new Date().getHours();
let message;
const name ="Mr.Stark";
const myStyle={
    fontSize: "2rem",
    fontWeight: "bold",
    fontStyle: "italic",
    borderBottom: "5px solid black",
    color:""
}
if(timeNow <12)
{
    message = "Good morning";
    myStyle.color ="red"
}
else if (timeNow < 18)
{
    message = "Good afternoon";
    myStyle.color ="blue"
    
}
else
{
    message = "Good evening";
    myStyle.color ="green"
}
ReactDom.render(<h1 style={myStyle}>{message} {name}</h1>,document.getElementById('root'));