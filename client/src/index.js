import 'materialize-css/dist/css/materialize.min.css'
import React from "react"
import ReactDOM from "react-dom"
import App from "app.js"
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxthunk from 'redux-thunk'
const store=createStore(reducers,{},applyMiddleware(reduxthunk));
ReactDOM.render(<Provider store={store}> <App/></Provider>,document.getElementById("root"));
