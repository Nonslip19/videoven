import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light px-5">
<div className="container-fluid">
  <a className="navbar-brand" href="#">Videoven</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-ul">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">Bize Katıl</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Stratejiler</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Plan</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Yardım</a>
      </li>
      
    </ul>
    <button type="button" className="btn btn1 mx-3">Oturum Aç</button>
    <button type="button" className="btn btn-dark">Ücretsiz Dene</button>
  </div>
</div>
</nav>
  )
}

export default Navbar;

