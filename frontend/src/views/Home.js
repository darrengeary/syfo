import React from "react"
// import sections
import Hero from "../components/sections/Hero"
import FeaturesTiles from "../components/sections/FeaturesTiles"
import FeaturesSplit from "../components/sections/FeaturesSplit"
import Contact from "../components/sections/Contact"
import Cta from "../components/sections/Cta"
import FeaturesSplit2 from "../components/sections/FeaturesSplit2"

const Home = () => {
  return (
    <>
      <Hero bottomDivider id='top' className='illustration-section-01' />
      <FeaturesTiles className='illustration-section-02' />
      <FeaturesSplit2
        invertMobile
        topDivider
        imageFill
        className='illustration-section-03'
      />
      <Cta />
      <FeaturesSplit
        invertMobile
        bottomDivider
        imageFill
        className='illustration-section-04'
      />
      <Contact />
    </>
  )
}

export default Home
