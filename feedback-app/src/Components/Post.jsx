import React from 'react';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

function Post() {
    const status = 200;
    const navigate = useNavigate();
    const onClick = ()=>{
        console.log("Hello")
        navigate('/about');
    }

    if(status == 404)
    {
        return <Navigate to='notfound'/>
    }
  return (
    <div>Post
    <button onClick={onClick}>Click</button>
    <Routes>
    <Route path='/show'><Route/>
    </Routes>
    </div>
  )
}

export default Post