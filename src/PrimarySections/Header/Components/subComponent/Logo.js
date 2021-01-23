import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className='header_logo col-4 col-lg-3'>
            <Link to='/'>
                <img src="assets/images/logo.png" alt="Ushop logo"/>
            </Link>
        </div>
    )
}

export default Logo
