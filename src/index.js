import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';
import { Provider } from 'react-redux';
import store from './store';

const App = (
  <Provider store = {store}>
    <TodoList></TodoList>
  </Provider>
)


//PWA progressive web applicaiton 
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
