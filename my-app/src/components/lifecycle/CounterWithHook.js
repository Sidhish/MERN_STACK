import React,{useEffect, useState} from 'react'

const CounterWithHook = () => {
    const[update,setUpdate] = useState(false);
    console.log("Counter with Hook Rendered..!");
    useEffect(() => {
        console.log("Component Mounted");
    },[]);
  return (
    <main>
    <div>
      <h1>Counter</h1>
      <p>Hello LPU</p>
      <button onClick={() => setUpdate((prev) => !prev)}>Render Component</button>
    </div>
    </main>
  )
}

export default CounterWithHook
