import React from 'react'
import BestSellersNav from './SubComponents/BestSellersNav'
import BestProducts from './SubComponents/BestSellersProducts'

function BestSellers() {
    return (
        <div className='best_sellers container'>
            <BestSellersNav/>
            <BestProducts/>
        </div>
    )
}

export default BestSellers
