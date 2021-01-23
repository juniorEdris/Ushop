import React from 'react'
import { Link } from 'react-router-dom'

function WideBanner() {
    return (
        <div className='wide_banner container mb-2'>
            <div className="row no-gutters">
                <div className="banner_img col-12 p-0">
                    <img src={`assets/images/wide_banner/wideBanner1.png`} alt=""/>
                </div>
                <div className="banner_text col-12 text-center">
                    <h2>Hundreds Power Tools</h2>
                    <p>Hammers Chisels, Universal Pliers, Nippers jigsaws, Saws</p>
                    <Link to='/bannerPath' className='banner_btn '>shop now</Link>
                </div>
            </div>
        </div>
    )
}

export default WideBanner
