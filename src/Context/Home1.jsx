import React, { useContext } from 'react'
import { Context1 } from './ProductContext'

const Home1 = () => {
  let data=useContext( Context1)
  return (
    <div>
      {
        data.map((el)=>{
          return(
           <>
           <h4> {el.description}</h4>
           <img src={el.images[0]} alt=''/>
           
           </>

          )
        })
      }
    </div>
  )
}

export default Home1

