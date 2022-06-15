import React from "react"
// import sections
import Hero from "../components/sections/Hero"
import FeaturesTiles from "../components/sections/FeaturesTiles"
import FeaturesSplit from "../components/sections/FeaturesSplit"
import Contact from "../components/sections/Contact"
import Testimonial from "../components/sections/Testimonial"
import Cta from "../components/sections/Cta"
import FeaturesSplit2 from "../components/sections/FeaturesSplit2"

const Home = () => {
  return (
    <>
      <Hero id='top' className='illustration-section-01' />
      <FeaturesTiles />
      <FeaturesSplit2
        invertMobile
        topDivider
        bottomDivider
        imageFill
        className='illustration-section-02'
      />
      <Cta split topDivider />
      <FeaturesSplit
        invertMobile
        topDivider
        bottomDivider
        imageFill
        className='illustration-section-02'
      />
      <Testimonial topDivider />
      <Contact />
    </>
  )
}

export default Home
