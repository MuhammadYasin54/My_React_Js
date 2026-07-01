import React, { useState } from "react";

const UseCounter = () =>{
    const [count, setCount] = useState(0);

    const incrementCount = ()=>{
        setCount (count + 1)
    }
    const discrementCount = () =>{
        setCount (count - 1)
    }
    return {count, discrementCount, incrementCount}
}
export default UseCounter;