import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div>
            <Link to='/'>
                <img src="assets/images/logo.png" alt="Ushop logo"/>
            </Link>
        </div>
    )
}

export default Logo
