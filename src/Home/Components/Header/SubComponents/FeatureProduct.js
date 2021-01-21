import React from 'react'
import FeatureProdNav from './FeatureProdNav'
import FeatureProductSlider from './FeatureProductSlider'

function FeatureProduct() {
    return (
        <div className='feature_product container'>
                <FeatureProdNav/>
                <FeatureProductSlider/>
            </div>
    )
}

export default FeatureProduct
