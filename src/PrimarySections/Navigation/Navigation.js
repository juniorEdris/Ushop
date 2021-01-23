import React from 'react'
import Dropdown from './Components/Dropdown'
import NavButtons from './Components/NavButtons'
import PageRoutes from './Components/PageRoutes'

function Navigation() {
    return (
        <div className='navigation'>
            <div className="navigation_container container">
                <Dropdown/>
                <PageRoutes/>
                <NavButtons/>
            </div>
        </div>
    )
}

export default Navigation
