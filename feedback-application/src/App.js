import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";


function App(){

    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = function (id){
        if(window.confirm('Are you sure you want to delete it ?')){
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }

    return(
        <>
        {/* <Header text="Hello world" bgColor='violet' textColor='white'/> */}
        <Header text="Hello world"/>
        <div className='container'>
        {/* <h1>Application Begins here</h1> */}
        <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
        </div>
        </>
    )
}

export default App;