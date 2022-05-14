import React from "react"
// import sections
import Hero from "../components/sections/Hero"
import FeaturesTiles from "../components/sections/FeaturesTiles"
import FeaturesSplit from "../components/sections/FeaturesSplit"
import Contact from "../components/sections/Contact"
import Testimonial from "../components/sections/Testimonial"
import Cta from "../components/sections/Cta"

const Home = () => {
  return (
    <>
      <Hero id='top' className='illustration-section-01' />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        bottomDivider
        imageFill
        className='illustration-section-02'
      />
      <Cta split topDivider />
      <Testimonial topDivider />
      <Contact />
    </>
  )
}

export default Home
