import React, { useState } from 'react'
import Title from './Title'
import Button from './Button';

function CallbackMemo () {
    const [counterOne,setCounterOne] = useState(0);
    const [counterTwo,setCounterTwo] = useState(0);
    console.log("Callback Memo Rendered!");
    const handleCounterOne = ()=>{
        setCounterOne((prev) => prev+1);
    }
    const handleCounterTwo = ()=>{
        setCounterOne((prev) => prev+1);
    }
  return (
    <div>
      <h1> USe Callback Memo</h1>
      <Title text={counterOne}/>
      <Button btnText={"counterOne"} handleClick={handleCounterOne}/>
      <Title text={counterTwo}/>
      <Button btnText={"counterTwo"} handleClick={handleCounterTwo}/>
    </div>
  );
}

export default CallbackMemo