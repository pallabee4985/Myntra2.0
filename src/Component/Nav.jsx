import { FaCartArrowDown } from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import React from "react";
import  "../Style/Nav.css"
import {Link,useLocation} from 'react-router-dom'
function Nav() {
  const loc=useLocation()
  const showSearchBar=loc.pathname==="/product";

  function searchHandler(e){
  //   let searchText=e.target.value
  //   console.log(searchText);
  //   let currentData=arr.filter((data)=>{
  //       return data.name.includes(searchText)
  //   })
    // setData(currentData)
}

  return (
    <>
      <nav class=" box d-flex justify-content-around navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <a class="navbar-brand" href="..">
            <img className="logo" src="https://pixlok.com/wp-content/uploads/2021/10/Myntra-Logo-PNG-ovjndf3.jpg" alt="" />
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto p-2 mb-lg-0 ">
            <li class="nav-item">
            <Link to="/">Home</Link>
              </li>
              <li class="nav-item nav-link">
              <Link to="./about">About</Link>
              </li>
              <li class="nav-item">
              <Link to="./product">Product</Link>
              </li>
              <li class="nav-item">
              <Link to="./contact">Contact</Link>
              </li>
              {/* <li class="nav-item">
              <Link to="./abc">STUDIO<sup className="red">NEW</sup></Link>
              </li> */}
              {showSearchBar && <input
              style={{width:"400px"}} onClick={searchHandler}
                class="form-control m-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />}
            </ul>
            <div className='reactIcon'>
              <div><CgProfile/></div>
              <div><FaCartArrowDown/></div>
              </div>
            
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
