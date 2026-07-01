import React from "react";
import Header from "../../header"
import Users from "../../utils/dummy";



const Home =()=>{
    const userName = JSON.parse(localStorage.getItem("User"))
//     const userName = "Muhammad Yasin"

//     const handleTest =()=>{
//         console.log(`Hello ${userName}`)
//     }
//     return (
//         <div>
//             <Header/>
//             <ul>
//                 {
//                     Users.map((item, index)=>{
//                         return <li key={index}>{item?.name}</li>

//                     })
//                 }
//             </ul>
//             <h1>B18 First Component</h1>
//             <h2>Hello ${userName}</h2>
//             <h3>{5*5}</h3>
//             <button onClick={handleTest}>Click Me</button>
//         </div>
//     )
// }
return(
<div>
       <Header screenName="Home"/>
       <br/><br/><br/>
    <h1>Welcome To Home </h1>
    <h3>Dear {userName?.name}</h3>
</div>
)
}
export default Home;