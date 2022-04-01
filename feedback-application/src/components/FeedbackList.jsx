import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback}) {
    console.log(feedback[0].rating);
    if(!feedback || feedback.length ===0){
        return <h1>No feedbacks</h1>
    } else
    return (
    <div className='feedback-list'>
        {feedback.map((item) => (         
            <FeedbackItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList