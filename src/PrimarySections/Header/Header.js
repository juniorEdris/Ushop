import React from 'react'
import './header.css'
import HeaderMiddle from './Components/HeaderMiddle'
import HeaderTop from './Components/HeaderTop'


function Header() {

    return (
            <div className='header'>
                <HeaderTop/>
                <HeaderMiddle/>
            </div>
    )
}

export default Header
