import React,{useEffect, useState} from "react";
import Header from "../../header";

const Services =()=>{

    const [count, setCount] = useState(0);
    const [input, setInput] = useState("")
    const [timeVal, setTimeVal] = useState(new Date().toLocaleTimeString())

    // useEffect(()=>{
    //     console.log("Example No. 01")
    // })

    // useEffect(()=>{
    //     console.log("Example No.02")
    // },[])

    // useEffect(()=>{
    //     console.log("Example No. 03")
    // },[count])

    // useEffect(()=>{
    //     console.log("Example No. 04")
    // }, [input])


    useEffect (()=>{
        const timer =  setInterval(()=>{
            let newDate = new Date().toLocaleString();
            setTimeVal(newDate)
        },1000)
        return(()=>{
            console.log("Timer Stopped");
            clearInterval(timer)
        })
    },[])

    useEffect (()=>{
        setTimeout(()=>{
            let updatedCount = count + 1;
            setCount(updatedCount);
            if (count == 20){
                console.log("Times Up")
                setCount(1)
                
                
            }
        },1000)
    },[count])

    return(
        <div>
          {/* <Header screenName="Services"/> */}
          <h1>Count {count}</h1>
          <h1>{(count == 20? "Times Up" : "Time Start")}</h1>
          {/* <button onClick={()=>setCount(count + 1)}>Increment</button>
          <input type="text" value={input} onChange={(e)=>setInput( e.target.value)} /> */}
          <h2>{timeVal}</h2>
        </div>
    )
}
export default Services;