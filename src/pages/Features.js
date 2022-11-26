import React,{useEffect} from 'react'
import '../css/features.css'
import { Tabtitle } from '../components/GeneralFunctions'

const Features = () => {
  Tabtitle('Features | RCPOS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='container'>
     <h1 className='features-text'>Features</h1> 
    </div>
  )
}

export default Features
