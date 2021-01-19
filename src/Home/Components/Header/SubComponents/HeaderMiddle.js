import React from 'react'
import Hamburger from './Hamburger'
import Logo from './Logo'
import SearchInput from './SearchInput'
import ServiceContact from './ServiceContact'

function HeaderMiddle() {

    return (
        <div className='header_middle d-flex justify-content-between container align-items-center'>
            <Hamburger/>
            <Logo />
            <SearchInput />
            <ServiceContact />
            <div className='col-6 bg-white d-md-none d-block'>Cart will be display here</div>
        </div>
    )
}

export default HeaderMiddle
