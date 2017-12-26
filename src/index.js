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
import Index from "./components/indexContainer";
import Registration from "./components/Auth/Registration";
import {CategoryFormContainer as CategoryForm, CategoriesContainer as Categories} from './components/Category/CategoryContainer'
import {PaymentsContainer as Payments, PaymentFormContainer as PaymentForm} from './components/Payment/PaymentFormContainer'

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
          <Route path="/home" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/categories" component={Categories} />
          <Route path="/category/new" component={CategoryForm} />
          <Route path="/payments" component={Payments} />
          <Route path="/payment/new" component={PaymentForm} />
        </div>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)

registerServiceWorker();
