import React, { useReducer } from "react";
const initialValue = {
    counterOne : 0,
    counterTwo : 0,
};
const reducer = (state,action) => {
    switch(action) {
        case "increament":
            return state + 1;
        case "decreament":
            return state - 1;
        case "reset":
            return 0;
        default:
            return state;
    }
}

function MultiReducer(){
    const[countOne,dispatch1] = useReducer(reducer,initialValue.counterOne)
    const[countTwo,dispatch2] = useReducer(reducer,initialValue.counterTwo)
    return(
        <main>
            <h1>counterOne : {countOne}</h1>
            <h1>counterTwo : {countTwo}</h1>
            <button onClick={()=>dispatch1("increament")}>Increament CounterOne by 1</button>
            <button onClick={()=>dispatch2("increament")}>Increament CounterTwo by 1</button>
            <button onClick={()=>dispatch1("decreament")}>Decreament counterOne by 1</button>
            <button onClick={()=>dispatch2("decreament")}>Decreament counterTwo by 1</button>
            <button onClick={()=>dispatch1("reset")}>Reset counterOne</button>
            <button onClick={()=>dispatch2("reset")}>Reset counterTwo</button>
        </main>
    )
}

export default MultiReducer;