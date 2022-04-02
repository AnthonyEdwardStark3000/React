// import  PropTypes  from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';


function FeedbackStats() {
    // calculate Ratings average
    const {feedback} = useContext(FeedbackContext);
    let average = feedback.reduce(function(acc, cur){
       return acc +cur.rating; 
    },0)/ feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, ''); // for printing with only one decimal place.
    console.log("Average is:"+average);

  return (
    <div className="feedback-stats">
        <h4>{feedback.length}<span> Reviews</span></h4>
        <h4>Average rating : { isNaN(average) ? 0: average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes ={
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats