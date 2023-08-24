import React, { useState,useEffect } from 'react'
import Loading from './Loading'
import FeatureProduct from './FeatureProduct'

function Catagory() {
  
    let[product,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((res)=>{
            return res.json()
        }).then((data)=>{
            return setProduct(data)
        })
    },[])
  return (
    <div>
      {product.length===0 && <Loading/>}
      {product.length>0 &&<FeatureProduct data={product}/> }
    </div>
  )
}

export default Catagory
