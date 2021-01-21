import React from 'react'
import { Link } from 'react-router-dom'

function FeatureProdNav() {
    return (
        <div className='featured_product_nav col-12'>
            <div className="row no-gutters">
                <div className="section_name col-10 col-md-10 col-lg-8">
                    <h3>featured product</h3>
                </div>
                <div className="box-tab col-12 col-lg-3 pt-2 pl-2">
                    <ul>
                        <li><Link to='#' className={`selected`}>all</Link></li>
                        <li><Link to='#'>prower tools</Link></li>
                        <li><Link to='#'>hand tools</Link></li>
                        <li><Link to='#'>plumbing</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FeatureProdNav
