import React from 'react'
import { useEffect, useState } from 'react'
import "../Style/Product.css"

function FeatureProduct({data}) {
  let[uniqueData,setUniqueData]=useState([])

  useEffect(()=>{
  let x=data.filter((a, i) =>data.findIndex((ele) => a.category ===ele.category) === i)
  setUniqueData(x)
},[data])
  console.log("DATA:",data);
  console.log("Unique",uniqueData);
  return (
    <div className='m-1 d-flex justify-content-center flex-wrap'>
        {
          uniqueData.map((item)=>{
            let{id,image,category,description,price,title}=item;
            return(
              <div className="card m-3 p-2" key={id}>
                <div className="card-hearder">
                  <h3>{title.slice(0,12)}</h3>
                </div>
                <div className="card-body">
                  <img src={image} alt="..." style={{height:"220px",width:"220px"}}/>
                  <p>{category}</p>
                  <p>{description.slice(0,30)}</p>
                </div>
                <div className="card-footer text-success">
                  {price}$
                  <button className='btn-btn-primary bg-info m-2 flot' style={{width:"150px"}}>ADD TO CART</button>
                </div>
              </div>
            )
          })
        }    
    </div>
  )
}
export default FeatureProduct
