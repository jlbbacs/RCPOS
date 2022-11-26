import React,{useEffect} from 'react'
import '../css/about.css'
import { Tabtitle } from '../components/GeneralFunctions'

const AboutUs = () => {

  Tabtitle('About Us | RCPOS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='container'>
      <h1 className='about-Us'>About Us</h1>
    </div>
  )
}

export default AboutUs
