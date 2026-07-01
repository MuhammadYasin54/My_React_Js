import React from "react";
import UseCounter from "../../custom-hook";

const About =()=>{

    const {count, discrementCount, incrementCount} = UseCounter()
    return (
        <div>
            <h1>Welcome to About</h1>
            <h1>count:{count}</h1>
            <button onClick={incrementCount} disabled={count >= 20}>Increment</button>
            <button onClick={discrementCount} disabled = {count <= 0}>Discrement</button>
        </div>
    )
}
export default About;