import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App(){

    const [feedback, setFeedback] = useState(FeedbackData);

    return(
        <>
        {/* <Header text="Hello world" bgColor='violet' textColor='white'/> */}
        <Header text="Hello world"/>
        <div className='container'>
        {/* <h1>Application Begins here</h1> */}
        <FeedbackList feedback={feedback}/>
        </div>
        </>
    )
}

export default App;