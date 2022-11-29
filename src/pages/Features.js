import React,{useEffect} from 'react'
import '../css/features.css'
import { Tabtitle } from '../components/GeneralFunctions'
import  Carousel  from '../components/Carousel'
import { Link } from 'react-router-dom'



const Features = () => {
  Tabtitle('Features | RCPOS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <>
     <h1 className='features-text'>Features</h1> 
     <div className="col-sm-12 mt-4">{<Carousel/>}</div>
  
     </>
  )
}

export default Features
