import React from 'react';
import {useState} from 'react'; // component state

function FeedBackItem() {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState('Example of a Feedback Item');

    const handleClick = ()=>{
        setRating((prev)=>{
           console.log(prev)
            return prev + 1
        })
    }

  return (
    <div className='card'>
    <div className='num-display'> {rating} </div>
    <div className='text-display'> {text} </div>
    <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedBackItem