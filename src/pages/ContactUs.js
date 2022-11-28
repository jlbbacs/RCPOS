import React,{useEffect} from 'react'
import { Tabtitle } from '../components/GeneralFunctions';
import '../css/contact.css'


const ContactUs = () => {
  Tabtitle('Contact Us | RCPOS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
   <div class="container">
    
     <div class="card mb-3" style={{maxwidth:540}}>
  <div class="row g-0">
    <div class="col-md-6">
      <img src="https://lscdn.blob.core.windows.net/review-images/11056251_133128141129475957_images.jpeg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
      <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Name"/>
            <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Address"/>
            <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Email"/>
            <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Contact number"/>
      </div>
    </div>
  </div>
</div>
 


</div>
  )
}

export default ContactUs
