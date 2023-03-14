import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter-slice';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    // APPROACH WITHOUT redux-toolkit
    // dispatch({ type: 'increment' });
    
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // APPROACH WITHOUT redux-toolkit
    // dispatch({ type: 'increase', amount: 5 });

    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    // APPROACH WITHOUT redux-toolkit
    // dispatch({ type: 'decrement' });

    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // APPROACH WITHOUT redux-toolkit
    // dispatch({ type: 'toggle' });

    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
