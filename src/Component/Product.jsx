import React,{useEffect,useState} from 'react'
import "../Style/Product.css"
import Loading from './Loading'

function Product() {
  let[product,setProduct]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((res)=>{
            return res.json()
        }).then((data)=>{
          console.log(data )
            return setProduct(data)
        })
    },[])
  return (
  <div className='m-1 d-flex justify-content-center flex-wrap'>
        {product.length===0?<Loading/>:
          product.map((item)=>{
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
export default Product
