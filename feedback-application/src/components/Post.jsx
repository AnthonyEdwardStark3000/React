import {useParams} from 'react-router-dom';
import {Navigate, useNavigate, Routes, Route} from 'react-router-dom';

function Post() {
    const params = useParams();
    const status = 200;
    const navigate = useNavigate();


    if(status ===404)
    {
        return(
            <Navigate to='/notFound' />
        )
    }

   const onClick = function(){
    console.log("Hello");
    navigate('/about');
    }

    return (
        <>
    <div>Post</div>
    <button onClick={onClick}>Click</button>
    <Routes>
        <Route path='/show' element={
            <h1>Show the hidden stuff</h1>
        }/>
    </Routes>
        </>
  )
}

export default Post
