import React from 'react'
import FeatureProdNav from './FeatureProdNav'
import Products from './Products'

function FeatureProduct() {
    return (
        <div className='feature_product'>
            <div className="container">
                <FeatureProdNav/>
                <Products/>
            </div>
        </div>
    )
}

export default FeatureProduct
