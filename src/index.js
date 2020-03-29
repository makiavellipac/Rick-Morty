import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'
import * as serviceWorker from './serviceWorker';
import "./index.css";
function WhithContext() {
  return(
    
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    
  )
};

ReactDOM.render(<WhithContext/>,document.getElementById('root'));
serviceWorker.unregister();
