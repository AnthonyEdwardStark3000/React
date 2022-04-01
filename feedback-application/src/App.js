function App(){
    const title = 'Blog Post';
    const content = 'Blog Post creation in Process';
    const comments = [
        { id: 1, text:'comment one'},
        { id: 2, text:'comment two'},
        { id: 3, text:'comment three'},
    ];
    const loading = false;
    const showComments = true;
    const commentBlock = (
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) =>(
                        <li key={index}>{comment.text}</li>
                ) 
                    )}
            </ul>
        </div>
    );
    return(
        <div className='container'>
        <h1>Application Begins here</h1>
        <h1>{title}</h1>
        <p>{content}</p>
        {showComments && commentBlock}
        
        </div>
    )
}

export default App;