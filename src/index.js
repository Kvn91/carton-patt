import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import './index.css'
import App from './containers/App'
import { initiateGame } from './actions/index'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.dispatch(initiateGame());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
