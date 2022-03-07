import React from 'react';
function App()
{
    const title = "Blog";
    const content = "Sample of React";
    const comments = [
        {id: 1, text:'one'},
        {id: 2, text:'two'},
        {id: 3, text:'three'},
        {id: 4, text:'four'},
    ];
    const commentBlock = (<div className="comments">
    <h3> Comments({comments.length})</h3>      
    <ul>
        {comments.map((comment, index)=>(
            <li key={index}>{comment.text}</li>
        ))}
    </ul>  
</div>);
    const loading = false;
    const showComments = true;
    if(loading) return <h1>Loading ...</h1>
    return(
    <div className="container">
    <h1>{title} </h1>
    <p>{content}</p>
       Show Comment {showComments ? 'yes' : 'no'}
       {showComments && commentBlock}

    </div>
    )
}

export default App;