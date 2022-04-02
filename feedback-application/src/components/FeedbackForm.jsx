import { useState, useContext, useEffect } from 'react';
import Card from "./shared/Card";
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackForm() {

    //Importing function from global state
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext); 
    useEffect(function(){
       if(feedbackEdit.edit === true)
       {
           setBtnDisabled(false);
           setText(feedbackEdit.item.text);
           setRating(feedbackEdit.item.rating);
       }
    },[feedbackEdit])   

    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('Should be 10 characters');

    const handleTextChange = function(e){
        if(text ===''){
            setBtnDisabled(true);
            setMessage(null);
        }else if( text !== '' && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage("Sorry the message length should be Greater than or Equal to 10");
        }else{
            setBtnDisabled(false);
            setMessage(null);
        }
         console.log(e.target.value);
         setText(e.target.value);   
    }
    const handleSubmit = function(e){
        e.preventDefault()  //to prevent from the default submitting character
        if(text.trim().length >10){
            const newFeedback = {
                text,
                rating
            }
            // handleAdd(newFeedback);
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id, newFeedback);
            }
            else{
                addFeedback(newFeedback);
            }
            setText('');
        }
    }
  return (
    <Card>
    <form onSubmit={handleSubmit}>
        <h2>How would you rate your service by us ?</h2>
        <RatingSelect select={function(rating){setRating(rating)}}/>
        <div className="input-group">
        <input onChange={handleTextChange} type="text" value={text} placeholder="Write a Review" />
        <Button type="submit" isDisabled={btnDisabled} version="secondary">Send</Button> 
        {/* Passing data to Button Component */}
        </div>
        {message &&<div className="message">{message}</div>}


    </form>
    </Card>
  )
}

export default FeedbackForm