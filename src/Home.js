import React from 'react'
import About from './About'
import Creativespeaker from './Creativespeaker'
import End from './End'

import Header from './Header'

import Navs from './Navs'
import Ourprogram from './Ourprogram'
import Oview from './Oview'
import Pages from './Pages'
import Register from './Register'
import Sonps from './Sonps'
import Watch from './Watch'




const Home = () => {
  return (
    <>
        <Navs/>
        <Header/>
        <About/>
        <Oview/>
        <Watch/>
        <Creativespeaker/>
        <Ourprogram/>
        <Register/>
        {/* <Pages/> */}
        <Sonps/>
        <End/>
      
    </>
  )
}

export default Home