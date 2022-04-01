import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App(){

    return(
        <>
        {/* <Header text="Hello world" bgColor='violet' textColor='white'/> */}
        <Header text="Hello world"/>
        <div className='container'>
        {/* <h1>Application Begins here</h1> */}
        <FeedbackItem />
        </div>
        </>
    )
}

export default App;