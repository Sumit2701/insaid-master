import React from 'react'
import logo from './Screenshot 2023-04-11 113535.png'
import { Link } from 'react-router-dom'
export const Navbar=()=> {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top opacity-75 justify-content-between">
  <div className="container-fluid">
    <a className="navbar-brand" href="">
    <img src={logo} alt="" width="40" height="30" class="d-inline-block align-text-top"/>

      Sumit Shoe Company 
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-space-around" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link className="nav-link" to="">
          Home
        </Link>
        <Link className="nav-link" to="/AboutUs">
          AboutUs
        </Link>
       
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
