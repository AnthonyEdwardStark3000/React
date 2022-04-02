import {motion, AnimatePresence} from 'framer-motion';
import FeedbackItem from "./FeedbackItem";
import { useContext } from 'react'; //for context
// import PropTypes  from 'prop-types';
import FeedbackContext from '../Context/FeedbackContext';


// function FeedbackList({feedback, handleDelete}) {
function FeedbackList() {
    // console.log(feedback[0].rating);
    const {feedback} = useContext(FeedbackContext); 
    if(!feedback || feedback.length ===0){
        return <h1>No feedbacks</h1>
    } else
    return (
    <div className='feedback-list'>
        <AnimatePresence>     
        {feedback.map((item) => (  
            <motion.div key={item.id}
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit = {{opacity: 0}}
            >

            <FeedbackItem key={item.id} item={item}
                // handleDelete = {handleDelete}
            />
            </motion.div>       
        ))}
        </AnimatePresence>
    </div>
  )
//     return (
//     <div className='feedback-list'>
//         {feedback.map((item) => (         
//             <FeedbackItem key={item.id} item={item}
//                 handleDelete = {handleDelete}
//             />
//         ))}
//     </div>
//   ) version of list without any animation
}

// FeedbackList.propTypes ={
//     feedback : PropTypes.arrayOf(
//         PropTypes.shape(
//             {
//                 id: PropTypes.number.isRequired,
//                 text: PropTypes.string.isRequired,
//                 rating: PropTypes.number.isRequired,
//             }
//         )
//     )
// }

export default FeedbackList