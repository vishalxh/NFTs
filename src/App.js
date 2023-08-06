import React from 'react'
import "./App.css"
import TrendingNFTs from './components/TrendingNFTs'
import BrandsIntegration from './components/BrandsIntegration'
import TopFold from './components/TopFold'
import Header from './components/Header'
import Footer from './components/Footer'
import InfoSection from './components/InfoSection'

const App = () => {
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
      <BrandsIntegration />
      <TrendingNFTs />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default App