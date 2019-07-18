import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
//import app
import App from './App' 
// import main reducers
import reducer from './reducers'
// import main root saga
import  rootSaga  from './sagas/sagas'
const sagaMiddleware = createSagaMiddleware()

//create store variable with saga and reducers
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
