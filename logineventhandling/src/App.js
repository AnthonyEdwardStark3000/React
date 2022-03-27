import React, { useState } from "react";

function App() {
  const [welcome, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);
  function handleClick(){
    setHeadingText("Submitted")
  }

  function hover(){
    // console.log("Hover");
    setMouseOver(true);
  }

  function hoverOver(){
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{welcome}</h1>
      <input type="text" placeholder='Whats your name?'></input>
      <button style={{ backgroundColor: isMousedOver ? "black":"white" }} 
       onClick={handleClick}
       onMouseOver={hover}
       onMouseOut={hoverOver}
       >Submit</button>
    </div>
  );
}

export default App;
