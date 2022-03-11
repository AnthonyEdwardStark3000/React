// import React from 'react';
// import Header from './Components/Header';
// function App()
// {
//     const title = "Blog";
//     const content = "Sample of React";
//     const comments = [
//         {id: 1, text:'one'},
//         {id: 2, text:'two'},
//         {id: 3, text:'three'},
//         {id: 4, text:'four'},
//     ];
//     const commentBlock = (<div className="comments">
//     <h3> Comments({comments.length})</h3>      
//     <ul>
//         {comments.map((comment, index)=>(
//             <li key={index}>{comment.text}</li>
//         ))}
//     </ul>  
// </div>);
//     const loading = false;
//     const showComments = true;
//     if(loading) return <h1>Loading ...</h1>
//     return(
//         <>
//         <Header text="Advace Bday wishes"/>
//     <div className="container">
//     <h1>{title} </h1>
//     <p>{content}</p>
//        Show Comment {showComments ? 'yes' : 'no'}
//        {showComments && commentBlock}

//     </div>
//     </>
//     )
// }

// export default App;
import Header from './Components/Header';
import { useState } from 'react';
// import FeedBackItem from './Components/FeedBackItem';
import FeedBackList from './Components/FeedBackList';
import FeedbackData from './Data/FeedbackData';
import FeedBackStats from './Components/FeedBackStats';
import FeedBackForm from './Components/FeedBackForm';
import { v4 as uuidv4 } from 'uuid';

function App(){
    //state definition starts
    const [feedback, setFeedback] = useState(FeedbackData);    
    //state definition ends
    const addFeedback=(newFeedback)=>{
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id)=>{
        // console.log(id);
        if(window.confirm('Are you sure to Delete this post ?:')){
            setFeedback(feedback.filter((item)=>
                item.id !== id
            ))
        }
    }

    return(
        <>
        <Header text="React Feedback" 
        //bgColor='red' textColor='white'
        ></Header>
        <div className="container">
        <FeedBackForm handleAdd ={addFeedback} />
        <FeedBackStats feedback = {feedback}/>
        <FeedBackList feedback = {feedback} handleDelete = {deleteFeedback}/>
        </div>
        </>
    )
};

export default App;