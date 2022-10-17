import { useState, useEffect, useReducer } from 'react';
import styles from './CounterNew.module.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    default:
      throw new Error(`Unsupported action type ${action.type}`)
  }
}

export function CounterNew() {
  const [counterB, setCounterB] = useState(0);
  const [count, dispatch] = useReducer(countReducer, 0);
  useEffect(() => {
    const totalClicks = count + counterB;
    console.log(totalClicks);
  }, [count, counterB]);
  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Кликнули count {count} раз
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        decrease
      </button>
      <button
        className={styles.btn}
        type="button"
        onClick={() => setCounterB(state => state + 1)}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}
