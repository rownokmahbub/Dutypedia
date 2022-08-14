import AboutUs from '@components/about/AboutUs'
import Developer from '@components/about/Developer'
import Hero from '@components/about/Hero'
import PainPoint from '@components/about/PainPoint'
import React from 'react'

const about = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Developer/>
        <PainPoint/>
    </div>
  )
}

export default about