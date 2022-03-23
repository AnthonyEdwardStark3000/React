import './App.css';

function strike(){
  document.getElementById('root').style.textDecoration = "line-through"
}

function App() {
  var isDone = false;
  const strikeThrough = {textDecoration: "line-through"}; 
  return (
    <>
    <p>
     Buy link
    </p>
    <button onClick={strike}>Change State</button>
    </>
  );
}

export default App;
