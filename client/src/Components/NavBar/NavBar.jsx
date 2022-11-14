import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./navBar.css";
import {Link} from 'react-router-dom';

export default function NavBar(){
  return (
    
    <div>
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a href="#" className="nav__brand">
      <Link to={"/home"}>
      <img className="LogoAVolar" src="https://res.cloudinary.com/dapicfoap/image/upload/v1668453030/Extras/LOGOAVOLAR_e1xsp4.png"/>
      </Link> 
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about"> Sobre nosotros </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Características</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Precios</a>
        </li>
      </ul>
    </div>
    
  <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button"> Login </button>
    <button class="btn btn-sm btn-outline-secondary" type="button"> Ayuda </button>
  </form>
  </div>
</nav>

    </div>
  )
}
