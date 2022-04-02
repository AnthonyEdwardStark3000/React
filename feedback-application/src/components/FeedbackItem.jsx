import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import Card from "./shared/Card";
import FeedbackContext from '../Context/FeedbackContext';
// import PropTypes  from 'prop-types';

function FeedbackItem({item}) {

// function handleClick(id){
//      console.log(id);
// }
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
    return (
    <Card reverse={true}>
    <div className="num-display">
        {item.rating} 
    </div>
    <button onClick = {function(){deleteFeedback(item.id)}} className="close">
        <FaTimes color='purple'/>
    </button>
    <button onClick = {function(){editFeedback(item)}} className="edit">
        <FaEdit color='purple'/>
    </button>
    <div className="text-display">
        <p>{item.text}</p>
    </div>
    </Card>
  )
}

// FeedbackItem.propTypes = {
//     item : PropTypes.object.isRequired,
// }

export default FeedbackItem
