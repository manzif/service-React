import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import '../src/styles/style.css';
import './adminlogin.css';
import store from '../src/redux/store';

render(
  <Provider store={store}>
    <App/>
  </Provider>,  
  document.getElementById("index")
);
