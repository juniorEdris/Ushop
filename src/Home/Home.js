import React from 'react'
import Banner from './Components/Banner'
import BestSellers from './Components/BestSellers'
import FeatureProduct from './Components/FeatureProduct'
import FeaturesCard from './Components/FeaturesCard'
import WideBanner from './Components/WideBanner'

function Home() {
    return (
        <div className='' style={{position:'relative'}}>
            <Banner/>
            <FeaturesCard/>
            <FeatureProduct/>
            <WideBanner/>
            <BestSellers/>
        </div>
    )
}

export default Home
