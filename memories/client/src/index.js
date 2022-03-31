import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux"; //from react to take care of the state
import { createStore, applyMiddleWare, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from "./App";
const store = createStore(reducers, compose(applyMiddleWare(thunk)));
ReactDom.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));