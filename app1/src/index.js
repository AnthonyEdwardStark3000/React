import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import './index.css'

// ReactDom.render(<App/> ,document.getElementById('root'));
ReactDom.render(
<React.StrictMode>
<App />
</React.StrictMode> ,
document.getElementById('root'));