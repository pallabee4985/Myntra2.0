import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"

function Loading() {
    let loading=true;
  return (
    <div className='d-flex justify-content-center'>
      <ClipLoader 
        loading={loading}
        size={100}
        aria-label="Loading spinners"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading
