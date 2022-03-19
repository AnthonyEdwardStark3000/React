import React from 'react';
import Avatar from './Avatar';
import Details from './Details';


function Card(props){
    return (
      <>
      <h1 className="heading">My contacts</h1>
      <div className="card">
      <div className="top">
      <h2 className="name">{props.name}</h2>
      <Avatar img={props.image}/>
      </div>
      <div className="bottom">
      <Details mail={props.mail}/>
      <Details phone={props.phone} />
      </div>
      </div>
    </>
    )
  }

export default Card;