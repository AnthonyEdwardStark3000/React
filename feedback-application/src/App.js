import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


function App(){

    const [feedback, setFeedback] = useState(FeedbackData);
    
    const deleteFeedback = function (id){
        if(window.confirm('Are you sure you want to delete it ?')){
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }

    const addFeedback = function (newFeedback){
        newFeedback.id = uuidv4();
        // console.log(newFeedback);
        setFeedback([newFeedback, ...feedback]);
    }

    return(
        <>
        {/* <Header text="Hello world" bgColor='violet' textColor='white'/> */}
        <Header text="Hello world"/>
        <div className='container'>
        {/* <h1>Application Begins here</h1> */}
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
        </div>
        </>
    )
}

export default App;