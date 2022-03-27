import React, { useState } from "react";

function App() {
  const [welcome, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleClick(event){
    setHeadingText("Submitted");
    // setName(event.target.value);
    setHeading(name);
    // event.preventDefault();
  }

  function hover(){
    // console.log("Hover");
    setMouseOver(true);
  }

  function hoverOver(){
    setMouseOver(false);
  }

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{welcome} {headingText}</h1>
      {/* <form> *form tags usually refresh to make post refresh */}
      <input onChange={handleChange} type="text" placeholder='Whats your name?' value={name}></input>
      <button type="submit" style={{ backgroundColor: isMousedOver ? "black":"white" }} 
       onClick={()=>handleClick()} //lambda to ignore re render error
       onMouseOver={hover}
       onMouseOut={hoverOver}
       >Submit</button>
      {/* </form> */}
    </div>
  );
}

export default App;
