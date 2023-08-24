import axios from 'axios'
import { useState } from 'react'
import React,{createContext, useEffect} from 'react'
import Home1 from './Home1'

const Context1=createContext()


function ProductContext() {
  // let[product,setProduct]=useState([])
  const [input,setinput]=useState([])
   useEffect(()=>{
     
    axios.get('https://dummyjson.com/products')
    .then((res)=>{
      console.log(res.data.products)
      return setinput(res.data.products)
    })


   },[])
  return (
    <>
      <Context1.Provider value={input}>
        <Home1/>
        </Context1.Provider>
    </>
  )
}

export default ProductContext
export{ Context1};
