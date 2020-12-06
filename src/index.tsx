import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import empReducer from './redux/reducers/empReducer';

import helloSaga from './redux/Saga/index'

import reportWebVitals from './reportWebVitals';
const SagaMiddleware = createSagaMiddleware();
const middleware = [SagaMiddleware];

const allReducers = combineReducers({employeeState: empReducer})
const store = createStore(allReducers, composeWithDevTools( applyMiddleware(...middleware)));

SagaMiddleware.run(helloSaga);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
