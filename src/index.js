import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import App from './containers/App'
import reducer from './reducers'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer,compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
