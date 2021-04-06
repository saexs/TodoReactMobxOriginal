import React from 'react';
import ReactDOM from 'react-dom';
import state from './store/store'
import App from './App'
import MyContext from './store/StoreContext'

ReactDOM.render(
  <MyContext.Provider value={state}>
    <App/>
  </MyContext.Provider>,
document.getElementById('root'));
