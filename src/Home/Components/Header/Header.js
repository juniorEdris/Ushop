import React from 'react'
import './header.css'
import Hamburger from './SubComponents/Hamburger'
import HeaderMiddle from './SubComponents/HeaderMiddle'
import HeaderTop from './SubComponents/HeaderTop'
import NavButtons from './SubComponents/NavButtons'


function Header() {

    return (
            <div className='header'>
                <HeaderTop/>
                <Hamburger/>
                <HeaderMiddle/>
                {/* <NavButtons/> */}
            </div>
    )
}

export default Header
