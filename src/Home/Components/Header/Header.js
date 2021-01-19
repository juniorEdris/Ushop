import React from 'react'
import './header.css'
import HeaderMiddle from './SubComponents/HeaderMiddle'
import HeaderTop from './SubComponents/HeaderTop'


function Header() {

    return (
            <div className='header'>
                <HeaderTop/>
                <HeaderMiddle/>
            </div>
    )
}

export default Header
