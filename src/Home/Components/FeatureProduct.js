import React,{useState} from 'react'
import FeatureProdNav from './FeatureProdNav'
import FeatureProductSlider from './FeatureProductSlider'

function FeatureProduct() {
    const [tab, setTab] = useState('all')
    console.log('featureProduct parent');
    return (
        <div className='feature_product container'>
                <FeatureProdNav tab={tab} setTab={setTab}/>
                <FeatureProductSlider tab={tab} />
            </div>
    )
}

export default FeatureProduct
