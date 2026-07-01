import React, { useMemo, useRef, useState } from "react";

const productData = [
    {
        productId: 1,
        productName: "Mango",

    },
     {
        productId: 2,
        productName: "Apple",

    },
     {
        productId: 3,
        productName: "Banana",

    },
     {
        productId: 4,
        productName: "Oranges",

    },
     {
        productId: 5,
        productName: "WaterMelon",

    },
     {
        productId: 6,
        productName: "Coconut",

    }
]

const CustomPage = () =>{

    const [products, setProducts] = useState(productData);
    const [search, setSearch] = useState("")
    const [email, setEmail] = useState("")
    const [headerText, setHeaderText] = useState("Search-Bar")
    const [count, setCount] = useState(0)
    
    const incrementCount = ()=>{
        setCount(count + 1)
    }

    const discrementCount = () =>{
        setCount(count-1)
    }
    const inputRef  = useRef(null);

    // const filteredProducts = products.filter((item, index)=>{
    //     console.log("Product is Filtering");
    //     return item.productName.toLowerCase().includes(search.toLowerCase());
    // })

    const filterProducts = useMemo(()=>{
        console.log("Prouct is Filtering");
        return products.filter((item, index)=>{
            return item.productName.toLowerCase().includes(search.toLowerCase())
        })
    }, [products, search])

    const submitForm =()=>{
        inputRef.current.style.border = "2px solid blue"
        console.log(inputRef.current.value)
        inputRef.current.value = ""
       
    }

    return (

        <div>
            <h1>Custom Screen</h1>
            <input type="text" placeholder="Enter Something"
            style={{outline:"none"}}
            ref={inputRef}
            />
            <button onClick={submitForm}>Submit</button>

            <h1>Email</h1>
            <input type="text" placeholder="abc@xyz.com"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }} />

        <h1>{headerText}</h1>

        <input type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        
        />
        <ul>{
            filterProducts.map((item, index)=>{
                return <li key={item.productId}>
                    {item.productName}
                </li>
            })
            }</ul>    
             
             <h1>Count:{count}</h1>
             <button onClick={incrementCount}>Increment</button>
             <button onClick={discrementCount}>Discrement</button>
        </div>
    )
    
}
export default CustomPage;