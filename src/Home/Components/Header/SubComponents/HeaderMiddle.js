import React from 'react'
import Logo from './Logo'
import SearchInput from './SearchInput'
import ServiceContact from './ServiceContact'

function HeaderMiddle() {

    return (
        <div className='header_middle d-flex justify-content-between container align-items-center'>
            <Logo/>
            <SearchInput />
            <ServiceContact/>
        </div>
    )
}

export default HeaderMiddle
