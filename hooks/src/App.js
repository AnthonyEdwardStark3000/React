import React, {useState} from "react";
var count =0;

function App() {
  const [count, setCount] = useState(0);
  // console.log(state);

  
function increment(){
  // count ++;
  // console.log(count);
  setCount(count+1);
}

function decrement(){
  setCount(count>0? count-1: 0)
}

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
