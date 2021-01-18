import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Header/SubComponents/Banner'
import Navigation from './Components/Header/SubComponents/Navigation'

function Home() {
    return (
        <div>
            <Header/>
            <Navigation/>
            <Banner/>
        </div>
    )
}

export default Home
