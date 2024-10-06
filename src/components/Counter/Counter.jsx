
import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
const [count, setCount] = useState(0);

const increaseNo = () => {
    // setCount(count + 1);
    // setCount(prevCounter=>prevCounter+1)
    // setCount(prevCounter=>prevCounter+1)
    // setCount(prevCounter=>prevCounter+1) // increase 3 value at a single time
    
  };

  const decreaseNo = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="counter-container">
        <h1>Counter</h1>
        <div className="counter-box">
            <button className="btn decrement" onClick={decreaseNo}>-</button>
            <span id="counter">{count}</span>
            <button className="btn increment" onClick={increaseNo}>+</button>
        </div>
    </div>
    
    
    </>
  )
}

export default Counter