import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const name = "Suresh";
const age = 22;
const currentDate = new Date();
const currentyear = currentDate.getFullYear();  
// const url ="https://media.gettyimages.com/photos/robert-downey-jr-attends-the-premiere-of-columbia-pictures-spiderman-picture-id803015182?k=20&m=803015182&s=612x612&w=0&h=f4UIm0rkrdUvrnRI1I0LQPIIjiRxucAewdfgwQVC-H8=";
const url = "https://picsum.photos/200";
const myStyle = {
  color: "white",
  background: "red"
};
myStyle.background = "violet";
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <>
  <p contentEditable = "true" spellCheck="false"> Created By {`${name}`}'s'
  Kathupom 
  loremsdfbhsdjfsbhdfhsdbfsldfhbsdlfblfshdfhsdlfsdlfsdfhbsdfldfhbldhfbdslfbsdfhldbsflsdhbfsdl
  loremsdfbhsdjfsbhdfhsdbfsldfhbsdlfblfshdfhsdlfsdlfsdfhbsdfldfhbldhfbdslfbsdfhldbsflsdhbfsdl
  loremsdfbhsdjfsbhdfhsdbfsldfhbsdlfblfshdfhsdlfsdlfsdfhbsdfldfhbldhfbdslfbsdfhldbsflsdhbfsdl
  loremsdfbhsdjfsbhdfhsdbfsldfhbsdlfblfshdfhsdlfsdlfsdfhbsdfldfhbldhfbdslfbsdfhldbsflsdhbfsdl
  loremsdfbhsdjfsbhdfhsdbfsldfhbsdlfblfshdfhsdlfsdlfsdfhbsdfldfhbldhfbdslfbsdfhldbsflsdhbfsdl
  </p>
  <p> Created By {name}'s'
  loremsdfbhsdjfsbhdfhsdbfsldfhbsdlfblfshdfhsdlfsdlfsdfhbsdfldfhbldhfbdslfbsdfhldbsflsdhbfsdl
  loremsdfbhsdjfsbhdfhsdbfsldfhbsdlfblfshdfhsdlfsdlfsdfhbsdfldfhbldhfbdslfbsdfhldbsflsdhbfsdl
  loremsdfbhsdjfsbhdfhsdbfsldfhbsdlfblfshdfhsdlfsdlfsdfhbsdfldfhbldhfbdslfbsdfhldbsflsdhbfsdl
  loremsdfbhsdjfsbhdfhsdbfsldfhbsdlfblfshdfhsdlfsdlfsdfhbsdfldfhbldhfbdslfbsdfhldbsflsdhbfsdl
  </p>
  <ul>
  <li style={myStyle}>apple</li>
  <li>orange</li>
  <li>banana</li>
  </ul>
  <img className="ImageDisplay" src={url+"?grayscale"} ></img>
  <h2 className="heading">And he is just <span> {age-1} </span>years old</h2>
  <h3>{`Copyright@${currentyear}`}</h3>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
