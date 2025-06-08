import {useState} from 'react'

import React from 'react'

const Counter = () => {
  
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>Counter</div>
      <button onClick={() => setCount(prev => prev+1)}>+</button>
      <label>{count}</label>
      <button onClick={() => setCount(prev => prev-1)}>-</button>
    </>
  )
}

export default Counter