import React from 'react'
import { Link } from 'react-router-dom'

function MenuSideBar({open,setOpen}) {
    const routes = ['home','megamenu','shop','accounts','blog','pages','buy theme',]
    return (
        <aside className={`${open && 'sidebar_open'} sidebar_menu`}>
            <div className='sidebar_close_btn pl-3 pr-3' onClick={()=>setOpen(!open)}>x</div>
            <div className='mb-3 col-12 d-flex justify-content-center'>
                <Link to='/'>
                    <img src="assets/images/logo.png" alt="Ushop logo"/>
                </Link>
            </div>
            <ul>
                {routes.map(x=>(
                    <li key={x}> <Link to={`/${x}`}>{x}</Link> </li>
                ))}
            </ul>
        </aside>
    )
}

export default MenuSideBar
