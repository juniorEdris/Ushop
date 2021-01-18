import React from 'react'
import Logo from './Logo'
import SearchInput from './SearchInput'
import ServiceContact from './ServiceContact'

function HeaderMiddle() {

    return (
        <div className='d-flex justify-content-between container align-items-center header_middle'>
            <Logo/>
            <SearchInput/>
            <ServiceContact/>
        </div>
    )
}

export default HeaderMiddle
