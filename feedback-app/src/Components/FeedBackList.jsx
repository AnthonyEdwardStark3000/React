import React from 'react'
import FeedBackItem from './FeedBackItem'

function FeedBackList({feedback}) {
    console.log(feedback);
  if(!feedback || feedback.length === 0)
  {
      return <p>No feedbacks yet</p>
  }
  else
    return (
    <div className='fedback-list'>
        {feedback.map((item)=>(
            <FeedBackItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default FeedBackList    
