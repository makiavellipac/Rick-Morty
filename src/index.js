import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import "./index.css";
function WhithContext() {
  return(
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
      
    
  )
};

ReactDOM.render(<WhithContext/>,document.getElementById('root'));
serviceWorker.unregister();
