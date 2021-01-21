import React from 'react'
import { Link } from 'react-router-dom'

export default function PageRoutes() {
    const routes = ['home','megamenu','shop','accounts','blog','pages','buy theme',]
    return (
        <nav className='col-7 route_page_links'>
            <ul className='d-flex page_links'>
                {routes.map(x=>(
                    <Link to={`/${x}`} key={x}><li>{x}</li></Link>
                ))}
            </ul>
        </nav>
    )
}
