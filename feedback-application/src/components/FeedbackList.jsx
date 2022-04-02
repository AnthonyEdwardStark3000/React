import FeedbackItem from "./FeedbackItem";
import PropTypes  from 'prop-types';


function FeedbackList({feedback, handleDelete}) {
    console.log(feedback[0].rating);
    if(!feedback || feedback.length ===0){
        return <h1>No feedbacks</h1>
    } else
    return (
    <div className='feedback-list'>
        {feedback.map((item) => (         
            <FeedbackItem key={item.id} item={item}
                handleDelete = {handleDelete}
            />
        ))}
    </div>
  )
}

FeedbackList.propTypes ={
    feedback : PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,
            }
        )
    )
}

export default FeedbackList