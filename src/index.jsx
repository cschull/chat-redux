// external modules
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import reduxPromise from 'redux-promise';
import { logger } from 'redux-logger';

import identityReducer from './reducers/identity_reducer';
import getMessagesReducer from './reducers/get_messages_reducer';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  currentUser: window.prompt("what's your username?", "") || `anonymous${Math.floor(Math.random()*500)+1}`
};

const reducers = combineReducers ({
  messages: getMessagesReducer,
  channels: identityReducer,
  selectedChannel: identityReducer,
  currentUser: identityReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

console.log(store.getState())

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
