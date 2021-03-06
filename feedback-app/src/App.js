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
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Card from './Components/shared/Card';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './Components/shared/AboutIconLink';
import Post from './Components/Post';



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
      <Router>
      <Header />
      <div className= 'container'>
      <Routes>
      <Route exact path='/'
       element={
          <>
          <FeedBackForm />
          <FeedBackStats />
          <FeedBackList />
          </>
      }>

      </Route>
       <Route path='/about' element={< AboutPage />}/>
       <Route path='/post/*' element={< Post />}/>
       <AboutIconLink />   
        </Routes>
        <Card>
        <NavLink to='/' activeClassName='active'>
        Home
        </NavLink>

        <NavLink to='/about' activeClassName='active'>
        About
        </NavLink>

        </Card>      
        </div>
      </Router>
    )
};

export default App;