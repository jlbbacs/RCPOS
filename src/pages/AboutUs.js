import React,{useEffect} from 'react'
import '../css/about.css'
import { Tabtitle } from '../components/GeneralFunctions'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUs = () => {

  Tabtitle('About Us | RCPOS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (

 
<div class="card mb-3 mt-5">
  <img src="https://www.goodbody.ie/images/default-source/blogs/investments/2021-investments/february-investments-2021/market-pulse-3-investments-goodbody-wide-feb21.jpg?sfvrsn=73bf9fd5_2" class="card-img-top" alt="..."/>
  
  <div class="container">

  <div class="card-body" id="about-what-text">
    <h4 class="card-title fw-bold">What we do</h4>
    <p class="card-text ">RCPOS innovative point of sale solution drives customer acquisition, increase average order size, and makes the dream of long-lasting, loyal customer relationships a reality.</p>
   <p class="card-text">At Tagrain we set our ambition to have a positive impact on the lives of millions of small-scale retailers by increasing their income through operational efficiency.</p>
  </div>
  
</div>
<div class="container mt-5">
<div class="accordion" id="accordionExample">
  <div class="accordion-item mb-3">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      WHO WE ARE
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      </div>
    </div>
  </div>
  <div class="accordion-item mb-3">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      WHAT WE DO
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      </div>
    </div>
  </div>
  <div class="accordion-item mb-3">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      WHE ARE DIFFERENT FORM THE REST
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      </div>
    </div>
  </div>
</div>
<div class="card-group g-5">
  <div class="card ">
    <img src="https://www.hbfuller.com/-/media/images/careers/teamwork-diverstiy-mission-and-culture.jpg" class="card-img-top"  data-aos="fade-down" data-aos-duration="1000" alt="..."/>
    <div class="card-body">
      <h2 class="card-title">OUR MISSION</h2>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
     
    </div>
  </div>
  <div class="card ">
    <img src="https://www.autonet.com.ng/images/mission.jpg" class="card-img-top" data-aos="fade-up" data-aos-duration="1000" alt="..."/>
    <div class="card-body">
      <h2 class="card-title">OUR VISION</h2>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      
    </div>
  </div>
  
</div>


</div>
</div> 




  )
}

export default AboutUs
