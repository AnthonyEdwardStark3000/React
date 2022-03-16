import React from 'react';
import Message, {thanks} from './Message';
import Header from './Header';
import Footer from './Footer';

function App(){
    return(
        <>
        <Header />
        <Message />
        <Footer />
        <>
        {thanks()}
        </>
        </>
    )
}

export default App