import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Sentrii from './components/SentriiContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Sentrii />
  </Provider>,
  document.getElementById('app')
);
