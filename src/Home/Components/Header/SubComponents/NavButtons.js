import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function NavButtons() {
    const [userDropdown, setuserDropdown] = useState(false)
    const [cartActive, setCartActive] = useState(false)
    const CartDropdown=()=>{
        setCartActive(!cartActive)
        setuserDropdown(false)
    }
    const UserDropdown =()=>{
        setuserDropdown(!userDropdown)
        setCartActive(false)
    }
    return (
        <div className='nav_button col-6 col-lg-2'>
            <div className='float-right'>
                <Link to='#'><span className='icon lnr lnr-heart'/></Link>
                <Link to='#' onClick={CartDropdown}><span className='icon lnr lnr-cart'/><span className='count'>4</span></Link>
                <Link to='#' onClick={UserDropdown}><span className='icon lnr lnr-user'/></Link>
            </div>

            <ul className={`cart_drop_down ${cartActive ? 'd-shown':'d-hidden'}`}>
                <li>
                    <div>product details</div>
                </li>
                <li>
                    <div>product details</div>
                </li>
                <li>
                    <div>product details</div>
                </li>
            </ul>
            <ul className={`user_drop_down ${userDropdown ? 'd-shown':'d-hidden'}`}>
                <li>
                    <div>Register</div>
                </li>
                <li>
                    <div>Login</div>
                </li>
            </ul>
        </div>
    )
}

export default NavButtons
