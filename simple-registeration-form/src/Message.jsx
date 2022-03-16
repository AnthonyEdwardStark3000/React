import React from "react";

function Message(){
const date = new Date();
const currentTime = date.getHours();
let message = "";
const name = "Mr.Stark";
const myStyle = {
    color: "white",
    background: "green",
    textAlign: "center"
}

if(currentTime < 12)
{
    message = "Good morning";
    myStyle.color = "green";
    myStyle.background = "white";

}
else if (currentTime < 18)
{
    message = "Good afternoon";
}   
else
{
    message = "Good night";
}

return (
        <>
    <h1 style={myStyle}>{message} {name}</h1>
</>
)
}

function thanks(){
    return "Thank You..";
}

export default Message;
export {thanks};