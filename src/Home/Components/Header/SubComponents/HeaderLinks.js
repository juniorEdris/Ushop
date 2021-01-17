import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './headerLinks.css'

function HeaderLinks() {
    const [currency, setCurrency] = useState(false)
    const [language, setLanguage] = useState(false)

    // Set currency dropDown
    const currencydown = () => {
        setCurrency(!currency)
    }
    // Set language dropDown
    const languagedown = () => {
        setLanguage(!language)
    }
    return (
        <div className='header_top_links container'>
            <div >
                <ul className='header_top_left_links'>
                    <li> <Link to='/about'>About Us</Link></li>
                    <li> <Link to='/contact'>Contacts</Link></li>
                    <li> <Link to='/store-location'>Store Location</Link></li>
                    <li> <Link to='/track-order'>Track Order</Link></li>
                    <li> <Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
            <div >
                <ul className='header_top_right_links'>
                    <li> <Link to='/my-account'>My Account</Link></li>
                    <li> <Link to='#' onClick={currencydown}>
                        Currency:<span className='selected_curr'>USD</span><span class="lnr lnr-chevron-down"/></Link>
                        <ul className={`currency-dropdown ${currency ? ''  : 'd-hidden'}`}>
                            <li><Link>USD</Link></li>
                            <li><Link>TK</Link></li>
                        </ul>
                    </li>
                    <li> <Link to='#' onClick={languagedown}>
                        Language:<span className='selected_lang '>BN</span><span class="lnr lnr-chevron-down"/></Link>
                         <ul className={`language-dropdown ${language ? '' :'d-hidden'}`}>
                            <li>EN</li>
                            <li>BN</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderLinks
