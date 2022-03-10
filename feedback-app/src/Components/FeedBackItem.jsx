import React from 'react';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';
import {useState} from 'react'; // component state

function FeedBackItem({item, handleDelete}) {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState('Example of a Feedback Item');

    // const handleClick = ()=>{
    //     setRating((prev)=>{
    //        console.log(prev)
    //         return prev + 1
    //     })
    // }


  return (
    <Card reverse = {false}>
    <div className='num-display'> {item.rating} </div>
    <button onClick={()=>{ handleDelete(item.id) }} className="close">
        <FaTimes color='purple' />
    </button>
    <div className='text-display'> {item.text} </div>
    </Card>
  )
}

export default FeedBackItem