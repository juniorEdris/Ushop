import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider() {

    const banners = [
        {
            id:1,
            image:'banner.png',
            heading:'Big Choice of Plumbing products',
            subheading:'Lorem Ipsum dolor sit amet, consecteture adipiscing elit etiam pharetrab laoreet dui quis molestie',
        },
        {
            id:2,
            image:'banner.png',
            heading:'Big Choice of Plumbing products',
            subheading:'Lorem Ipsum dolor sit amet, consecteture adipiscing elit etiam pharetrab laoreet dui quis molestie',
        },
        {
            id:3,
            image:'banner.png',
            heading:'Big Choice of Plumbing products',
            subheading:'Lorem Ipsum dolor sit amet, consecteture adipiscing elit etiam pharetrab laoreet dui quis molestie',
        },
]

    const options ={
        loop:true,
        items:1,
        nav:false,
        navSpeed:1000,
        margin:10
    }
    return (
        <div className='home_slider'>
              <OwlCarousel
              className='owl-theme'
              {...options}
              >
                {banners.map((banner)=>(
                <div className="slider-area col-12">
                    <div className="single-slider d-flex align-items-center" key={banner.id} style={{backgroundImage: `url(assets/images/${banner.image})`}}>
                            <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6 col-sm-8">
                                <div className="slider-text">
                                    <h1>{banner.heading}</h1>
                                    <p>{banner.subheading}</p>
                                    <Link className="btn-1 home-btn" to="/details">shop now</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    ))}
              </OwlCarousel>
              
                      
        </div>
    )
}

export default Slider
