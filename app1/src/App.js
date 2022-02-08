import React from 'react';
function App(){
    const title = 'Blog Post';
    const body = 'This is my Blog Post';
    const loading = false;
    const showComments = true;

    const comments = [
        {
            id:1 ,text:'comment One'
        },
        {
            id:2 ,text:'comment Two'
        },
        {
            id:3 ,text:'comment Three'
        },
        {
            id:4 ,text:'comment Four'
        },
    ]
    const data = (<div className='comments'>
    <ul>{comments.map((comment, index) => (
               <li key={index}>{comment.text}</li>    
            ))}</ul></div>)

    if(loading)
    {
        return (
            <div>
                <h1>Loading ....</h1>
            </div>
        )
    }
    return (
        // <h1>Hello from the App</h1>
        
        <div className='container'>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{Math.random()*10}</p>  
            {showComments && data}
        </div>
        
        )
}
export default App