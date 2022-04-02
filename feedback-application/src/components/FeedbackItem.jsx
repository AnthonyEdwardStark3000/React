import { FaTimes } from 'react-icons/fa';
import Card from "./shared/Card";
import PropTypes  from 'prop-types';

function FeedbackItem({item, handleDelete}) {

// function handleClick(id){
//      console.log(id);
// }

    return (
    <Card reverse={true}>
    <div className="num-display">
        {item.rating} 
    </div>
    <button onClick = {function(){handleDelete(item.id)}} className="close">
        <FaTimes color='purple'/>
    </button>
    <div className="text-display">
        <p>{item.text}</p>
    </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired,
}

export default FeedbackItem
