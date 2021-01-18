import React from 'react'
import Slider from './Slider'

function Banner() {
    return (
        <div className='container d-flex'>
            <div className='col-3'></div>
            <div className='col-9'>
                <Slider/>
            </div>
        </div>
    )
}

export default Banner
