import React from 'react'
import { Link } from 'react-router-dom'

function Slider() {
    return (
        <>
          <div className="slider-area">
                      <div className="single-slider d-flex align-items-center" style={{backgroundImage: 'url(assets/images/banner.png)'}}>
                          <div className="container-fluid">
                          <div className="row">
                              <div className="col-sm-6 col-sm-8">
                              <div className="slider-text">
                                  <h1>Big Choice of Plumbing products</h1>
                                  <p>Lorem Ipsum dolor sit amet, consecteture adipiscing elit
etiam pharetrab laoreet dui quis molestie</p>
                                  <Link className="btn-1 home-btn" to="/details">shop now</Link>
                              </div>
                              </div>
                          </div>
                          </div>
                      </div>
              </div>
        </>
    )
}

export default Slider
