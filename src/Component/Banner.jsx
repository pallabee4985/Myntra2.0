import React from 'react'

function Banner() {
    let src1="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4908fa42151975.57c2e7c6563c0.jpg"
    let src2="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f75d8942151975.57c2e7c65467e.jpg"
    let src3="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7557ee42151975.57c2e7c6577d5.jpg"
  return (
    <div style={{margineTop:"10px"}}>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={src1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={src2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={src3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Banner
