import React from 'react'
import FeedBackItem from './FeedBackItem'
import PropTypes from 'prop-types';
import {motion, AnimatePresence} from 'framer-motion';

function FeedBackList({feedback, handleDelete}) {
    console.log(feedback);
  if(!feedback || feedback.length === 0)
  {
      return <p>No feedbacks yet</p>
  }
  else
    return (
    <div className='fedback-list'>
    <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div
             key={item.id}
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             exit={{opacity: 0}}
             >
            <FeedBackItem key={item.id} item={item}
            handleDelete = { handleDelete }/>
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
//     return (
//     <div className='fedback-list'>
//         {feedback.map((item)=>(
//             <FeedBackItem key={item.id} item={item}
//             handleDelete = { handleDelete }/>
//         ))}
//     </div>
//   )
}

FeedBackList.propTypes ={
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            })
    )
}

export default FeedBackList    
