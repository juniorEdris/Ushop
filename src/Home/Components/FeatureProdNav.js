import React from 'react'
import { Link } from 'react-router-dom'

function FeatureProdNav({tab,setTab}) {

    const tabs = [
        {
            id:1,
            name:'all',
        },
        {
            id:2,
            name:'power tools',
        },
        {
            id:3,
            name:'hand tools',
        },
        {
            id:4,
            name:'plumbing',
        },
    ]
    return (
        <div className='featured_product_nav col-12 p-0'>
            <div className="row no-gutters">
                <div className="section_name col-10 col-md-10 col-lg-8">
                    <h3>featured product</h3>
                </div>
                <div className="box-tab col-12 col-lg-3 pt-2 pl-2">
                    <ul>
                        {
                            tabs.map(x=>(
                                <li key={x.id}><Link to='#' className={`${tab===x.name && 'selected'}`} onClick={()=>setTab(x.name)}>{x.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FeatureProdNav
