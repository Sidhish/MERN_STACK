

import React, { useReducer } from "react";

const initialValue = {
  counter1: 0,
  counter2: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, counter1: state.counter1 + 1 };
    case "increment2":
      return { ...state, counter2: state.counter2 + 1 };
    case "decrement1":
      return { ...state, counter1: state.counter1 - 1 };
    case "decrement2":
      return { ...state, counter2: state.counter2 - 1 };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function RedCounter() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <main>
      <h1>Counter 1: {state.counter1}</h1>
      <h1>Counter 2: {state.counter2}</h1>

      <button onClick={() => dispatch({ type: "increment1" })}>Increment Counter 1</button>
      <button onClick={() => dispatch({ type: "increment2" })}>Increment Counter 2</button>
      <button onClick={() => dispatch({ type: "decrement1" })}>Decrement Counter 1</button>
      <button onClick={() => dispatch({ type: "decrement2" })}>Decrement Counter 2</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset Both</button>
    </main>
  );
}

export default RedCounter;


