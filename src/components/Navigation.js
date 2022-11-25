import React from 'react';
import {Link} from 'react-router-dom';


 
function Navigation() {
  return (
    <div  className='container'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">RCPOS LOGO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link className="nav-link"  to ="/">Home</Link>
      <Link className="nav-link"  to ="About">About Us</Link>
      <Link className="nav-link"  to ="ContactUs">Contact</Link>
      <Link className="nav-link"  to ="Features">Features</Link>
     
     
       
        
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navigation
