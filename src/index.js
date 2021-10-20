import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './redux/store/Store'
import { Provider } from 'react-redux'
import {ToastContainer} from 'react-toastify'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
      <ToastContainer/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
