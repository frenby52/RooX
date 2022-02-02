import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {createAPI} from "./api";
import reducer from "./reducer/reducer";
import {Operation} from "./reducer/users/users";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

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
