import React from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.css';


 
function Navigation() {
  return (
    <div  className='container'>
      <nav class="navbar sticky-top navbar-expand-lg bg-white ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">RCPOS LOGO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link className="nav-link"  to ="/">HOME</Link>
      <Link className="nav-link"  to ="About">ABOUT US</Link>
      <Link className="nav-link"  to ="ContactUs">CONTACT</Link>
      <Link className="nav-link"  to ="Features">FEATURES</Link>
     
     
       
        
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navigation
