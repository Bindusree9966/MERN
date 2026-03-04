import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };

    case "Decrement":
      return { count: state.count - 1 };

    case "Reset":
      return { count: 0 };

    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer example</h1>

      <h2>Count: {state.count}</h2>

      <button className='btn' onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button className='btn' onClick={() => dispatch({ type: "Decrement" })}>-</button>
      <button className='btn' onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default Reducer;