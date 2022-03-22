import Login from './Login';
import './App.css';
var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);


function App() {
  return (
    <div className="container">
     {
      isLoggedIn ? <h1>Hello</h1> :<Login />      
     }
    </div>
  );
}

export default App;
