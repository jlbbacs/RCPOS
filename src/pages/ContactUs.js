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
    <h3 className='contact-text mb-2'>Let’s start a conversation</h3>
     <h4 className='reach-text'>Reach out to us and we’ll be in touch as soon as possible.</h4> 
    
     <div class="card mb-3 shadow" style={{maxwidth:540}}>
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
            <div class="mb-3">

      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
      </div>    
      </div>

      <div className='contact-button'>
      <button type="button" class="btn btn-outline-secondary">Submit</button>
      <button type="button" class="btn btn-outline-secondary">Cancel</button>
      </div>

    </div>
  </div>
</div>
 </div>


  )
}

export default ContactUs
