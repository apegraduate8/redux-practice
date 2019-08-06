import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, equation, success } from './actions';
import { sum } from './helper/equation';
import './App.css';

const App = () => {
  const counter = useSelector(state => state.counter);
  const auth = useSelector(state => state.auth);
  const currentEquation = useSelector(state => state.equation);
  const successCheck = useSelector(state => state.success);
  const dispatch = useDispatch();

  const dispatcher = (reducer, arg) => {
      dispatch(reducer(arg));
  }

  const evaluate = () => {
      if (eval(currentEquation) === counter) {
          dispatch(success(true));
          dispatch(equation(sum()));
      }

      return counter;
  }

  return (
      <div className="App">
          <div>
            What is the sum of { currentEquation } ?
          </div>
          <div>
              { successCheck ? <p>Great Job!</p> : '' }
              <h1>Counter: { evaluate() }</h1>
          </div>
          <div className="mid">
              <button onClick={ () => dispatcher(increment, 5) }>+</button>
              <button onClick={ () => dispatcher(decrement, 0) }>-</button>
              { auth ? <h3>Valuable Info: Only for logged in user</h3> : '' }
          </div>
      </div>
  );
}

export default App;
