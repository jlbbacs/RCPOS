import React,{useEffect} from 'react'
import '../css/about.css'
import { Tabtitle } from '../components/GeneralFunctions'

const AboutUs = () => {

  Tabtitle('About Us | RCPOS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (

   <>  
<div class="card mb-3 mt-5">
  <img src="https://www.goodbody.ie/images/default-source/blogs/investments/2021-investments/february-investments-2021/market-pulse-3-investments-goodbody-wide-feb21.jpg?sfvrsn=73bf9fd5_2" class="card-img-top" alt="..."/>
  
  <div class="container">

  <div class="card-body">
    <h4 class="card-title">What we do</h4>
    <p class="card-text ">RCPOS innovative point of sale solution drives customer acquisition, increase average order size, and makes the dream of long-lasting, loyal customer relationships a reality.</p>
   <p class="card-text">At Tagrain we set our ambition to have a positive impact on the lives of millions of small-scale retailers by increasing their income through operational efficiency.</p>
  </div>

  <div class="card text-white mb-3" id="mission-card" style={{maxwidth:100}}>
  <div class="card-header">Our Mission</div>
  <div class="card-body">
   
    <p class="card-text text-dark">Empower small-scale retailers for growth by offering an easy to use and scalable point-of-sale solution.</p>
  </div>
</div>
  
</div>




</div> 




</>  
  )
}

export default AboutUs
