import React from 'react'
import Dropdown from './Dropdown'
import NavButtons from './NavButtons'
import PageRoutes from './PageRoutes'

function Navigation() {
    return (
        <div className='navigation '>
            <div className="container d-flex">
                <Dropdown/>
                <PageRoutes/>
                <NavButtons/>
            </div>
        </div>
    )
}

export default Navigation
