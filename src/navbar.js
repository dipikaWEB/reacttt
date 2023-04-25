import react from 'react';
import './App.css';
import image from './IMG/LOGO.png';


function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={image}></img> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Contact</a>
        </li>
        <li style={{marginLeft:"360px"}} class="nav-item">
          <a class="nav-link " href="/login">Log in</a>
        </li>
        </ul>
        <a class="nav-link " href="/register">
        <button className='btnre' >Register</button>
        </a>
    </div>
  </div>
</nav>
        </div>

    )
}

export default Navbar;