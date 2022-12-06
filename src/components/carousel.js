import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../css/carousel.css'

const carousel = () => {
  return (
    <div className='container'>
       <Carousel fade >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://fitsmallbusiness.com/wp-content/uploads/2020/12/FeatureImage_POS_Apps.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.hashmicro.com/blog/wp-content/uploads/2018/06/Welcome-Table.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.merchantmaverick.com/wp-content/uploads/2020/08/Square-Stand-For-Contactless-And-Chip-1.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default carousel
