import React,{useEffect} from 'react'
import { Tabtitle } from '../components/GeneralFunctions';
import '../css/contact.css'


const ContactUs = () => {
  Tabtitle('Contact Us | RCPOS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container'>
     <h1 className='contact-text '>Contact Us</h1> 
    </div>
  )
}

export default ContactUs
