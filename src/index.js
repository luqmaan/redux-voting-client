import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';


import reducer from './reducer';
import {setState} from './action_creators';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';
import remoteActionMiddleware from './remote_action_middleware';

require('./style.css');

console.log('hai');

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
var store = createStoreWithMiddleware(reducer);

socket.on('state', (state) => {
  console.log('received state', state);
  store.dispatch(setState(state));
});


window.store = store;
window.socket = socket;


ReactDOM.render(
  (
    <Provider store={store}>
      <App>
        <VotingContainer />
        <ResultsContainer />
      </App>
    </Provider>
  ),
  document.getElementById('app')
);
