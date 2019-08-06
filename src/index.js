import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// REDUX practice
//--------------------------------

// import { createStore } from 'redux';

// // STORE - global state

// // ACTION INCREMENT
// const increment = () => {
//   return {
//     type: 'INCREMENT',

//   };
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT',

//   };
// }

// // REDUCER - transform state
// const reducer = (state = 0, action) => {
//     switch (action.type) {

//         case 'INCREMENT':
//           return state + 1;
//         case 'DECREMENT':
//           return state - 1;
//     }
// }

// let store = createStore(reducer);
// // display store in console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH - execute action
// store.dispatch(increment());

