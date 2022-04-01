import {useState} from 'react'; // for setting up default values, events and function

function FeedbackItem() {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState('Good try');

   const handleClick = function(){
       setRating(function(prev){
            console.log(prev);
            return prev+1;
       })
   } 

  return (
    <div className="card">
    <div className="num-display">
        {rating} 
    </div>
    <div className="text-display">
        {text}
    </div>
    <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default FeedbackItem
