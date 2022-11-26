import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Tabtitle } from '../components/GeneralFunctions';
import '../css/home.css'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Home = () => {

  Tabtitle('Home | RCPOS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
 
    <div className=''>
   
   <div className='conrtainer'>
      <div class="card mb-3 mt-5">
     <img src="https://www.investsmall.co/wp-content/uploads/2021/09/POS-agencies-in-Nigeria.jpg"  class="card-img-top shadow-md"  alt="..." />
      <div class="card-body" >
        <h4 class="card-title fw-bold mt-3"  >RCPOS PROVIDER, from order placement to payment and everything in between.</h4>
        <p class="card-text mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
      </div>
      </div>
    </div>

    <div className='container'>

    <div class="card mb-3 mt-5" style={{maxwidth:540}}>
  <div class="row ">
    <div class="col-md-6" data-aos="fade-right" data-aos-duration="1000">
      <img src="https://fitsmallbusiness.com/wp-content/uploads/2022/08/FeatureImage_Types_of_POS_Systems.jpg" class="img-fluid rounded shadow-sm"  alt="..."/>
    </div>
    <div class="col-md-6 ">
      <div class="card-body mt-5" >
        <h5 class="card-title fw-bold ">Get Paid Faster</h5>
        <p class="card-text">Never lose a sale because of the limited payment options. With Tagrain’s ability to collect payments in cash, cards, loyalty points, and gift cards, make sure your customer has got enough options to pay you.</p>
        <br></br>
        <p class="card-text">Never lose a sale because of the limited payment options. With Tagrain’s ability to collect payments in cash, cards, loyalty points, and gift cards, make sure your </p>
      </div>
    </div>
  </div>
</div>



<div class="card mb-3 mt-5" style={{maxwidth:540}}>
  <div class="row ">
   
    <div class="col-md-6 " >
      <div class="card-body mt-5" >
        <h5 class="card-title fw-bold " >Flexible Pricing</h5>
        <p class="card-text">Never lose a sale because of the limited payment options. With Tagrain’s ability to collect payments in cash, cards, loyalty points, and gift cards, make sure your customer has got enough options to pay you.</p>
        
      </div>
    </div>
    <div class="col-md-6 " data-aos="fade-up" data-aos-duration="1000"  >
      <img src="https://img.freepik.com/premium-photo/human-hand-working-with-3d-rendering-cashier-machine_493806-1446.jpg?w=2000" class="img-fluid rounded shadow-sm"  alt="..."/>
    </div>

  </div>
</div>


</div>




      </div>
   




  )
}

export default Home;
