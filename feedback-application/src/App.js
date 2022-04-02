import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
// import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Aboutpage from './pages/Aboutpage';
import AboutIconLink from './components/AboutIconLink';
// import Post from './components/Post';
import { FeedbackProvider } from './Context/FeedbackContext'; 


function App(){

    // const [feedback, setFeedback] = useState(FeedbackData);
    

    return(
        <FeedbackProvider>
        <Router>
        {/* <Header text="Hello world" bgColor='violet' textColor='white'/> */}
        <Header text="Hello world"/>
        <div className='container'>
        {/* <h1>Application Begins here</h1> */}
        <Routes>
            <Route exact path='/' element={
                <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                </>
            }>
            </Route>
            {/* The router */}
            <Route path='/about' element={<Aboutpage />}>This is the about route</Route>
            {/* <Route path='/post/*' element={<Post />}>This is the about route</Route> tried for routing practice*/}
        </Routes>
        <AboutIconLink />
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App;