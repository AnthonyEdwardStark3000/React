import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();
export const FeedbackProvider = function({children}){
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is feedback one",
            rating: 10
        },
        {
            id: 2,
            text: "This is feedback two",
            rating: 7
        },
        {
            id: 3,
            text: "This is feedback three",
            rating: 5
        },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        boolean: false
    });
    
    const addFeedback = function (newFeedback){
        newFeedback.id = uuidv4();
        // console.log(newFeedback);
        setFeedback([newFeedback, ...feedback]);
    }


    const deleteFeedback = function (id){
        if(window.confirm('Are you sure you want to delete it ?')){
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }

    //update an item
    
    const updateFeedback = function (id,updateItem){
    //    console.log(id);
    //    console.log(updateItem);
    setFeedback(feedback.map((item)=>item.id === id ? {...item, ...updateItem} : item   
    ));
    }
    
    //set update for an item
    const editFeedback = function (item){
       setFeedbackEdit({
           item,
           edit: true
       })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
    {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;