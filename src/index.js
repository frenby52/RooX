import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createAPI} from "./api.js";
import reducer from "./reducer/reducer.js";
import {Operation} from "./reducer/users/users.js";

const api = createAPI();
const store = createStore(reducer, compose(applyMiddleware(thunk.withExtraArgument(api)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));

const init = () => {
  store.dispatch(Operation.getContacts());
};

init();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
