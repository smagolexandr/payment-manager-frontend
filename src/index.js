import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './components/index.css';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';
// redux
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import Login from "./components/Auth/LoginContainer";
import Registration from "./components/Auth/Registration";

export const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...[thunk]),
  )
)

ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </div>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)

registerServiceWorker();
