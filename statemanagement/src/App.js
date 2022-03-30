import './App.css';

var isDone = false;
function strike(){
  isDone = true
  // document.getElementById("root").style.textDecoration="line-through";
}
function removeStrike(){
   isDone = false;
  // document.getElementById("root").style.textDecoration= null;
}

function App() {
  // const strikeThrough = {textDecoration: "line-through"}; 
  return (
    <>
    <p style={isDone?{textDecoration:"line-through"}: null}>
     Buy link
    </p>
    <button onClick={strike}>Strike State</button>
    <button onClick={removeStrike}>Change State</button>
    </>
  );
}

export default App;
