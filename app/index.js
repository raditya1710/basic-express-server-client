import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory as history, match} from 'react-router';

import routes from './routes';
import reducers from './reducers';
import promise from 'redux-promise';

const preloadedState = window.__PRELOADED_STATE__;

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

match({ history, routes }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, preloadedState)}>
      <Router {...renderProps} />
    </Provider>, document.querySelector('.container'))
});
