import React from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import {useState} from 'react';
import RatingSelect from './RatingSelect';

function FeedBackForm({handleAdd}) {
    const [text, setText]= useState('');
    const [btnDisabled, setBtnDisabled]= useState(true);
    const [message, setMessage]= useState('');
    const [rating, setRating]= useState(10);

    const handleTextChange = (e)=>{
        if(text ===''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !=='' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Minumum 10 characters should be entered')
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length > 10)
        {
            const newFeedback = {
                text,
                rating,
            }
            handleAdd(newFeedback);
            setText('')
        }
    }

  return (
    <Card>
    <form onSubmit={handleSubmit}>
    <h2>How much would your rating for our service be?</h2>
    {
        /* Rating select component */
        <RatingSelect select={(rating)=>{
            setRating(rating)
        }}/>
    } 
    <div className="input-group">
        <input onChange={handleTextChange} type="text" id="input" placeholder='Enter your Review' value={text}/>
        <Button type='submit' version='secondary' isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}    
    </form>
    </Card>
  )
}

export default FeedBackForm