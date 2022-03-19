import React from 'react';
 function Details(props){
     return(
         <>
        <p className="info">{props.phone}</p>
        <p className="info">{props.mail}</p>
         </>
     )
 }

 export default Details;