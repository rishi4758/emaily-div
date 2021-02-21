import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxthunk));
ReactDOM.render(<App />, document.getElementById("root"));
