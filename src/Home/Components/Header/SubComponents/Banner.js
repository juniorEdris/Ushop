import React from 'react'
import Slider from './Slider'

function Banner() {
    return (
        <div className=' container d-flex'>
            <div className='col-md-3 d-none d-md-block'></div>
            <div className='col-md-9 col-12 home_banner'>
                <Slider/>
            </div>
        </div>
    )
}

export default Banner
