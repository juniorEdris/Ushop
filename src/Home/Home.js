import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Header/SubComponents/Banner'
import FeatureProduct from './Components/Header/SubComponents/FeatureProduct'
import FeaturesCard from './Components/Header/SubComponents/FeaturesCard'
import Navigation from './Components/Header/SubComponents/Navigation'

function Home() {
    return (
        <div style={{position:'relative'}}>
            <Header/>
            <Navigation/>
            <Banner/>
            <FeaturesCard/>
            <FeatureProduct/>
        </div>
    )
}

export default Home
