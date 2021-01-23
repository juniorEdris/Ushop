import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import MenuSideBar from './MenuSideBar'

export default function Hamburger() {
    const [sidebar, setSidebar] = useState(false)
    return (
        <>
            <div className='ham-burger col-2'>
                <Link to='#' onClick={()=>setSidebar(!sidebar)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Link>
            </div>
            <MenuSideBar open={sidebar} setOpen={setSidebar}/>
        </>
    )
}
