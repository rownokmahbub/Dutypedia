import AboutUs from '@components/about/AboutUs'
import Developer from '@components/about/Developer'
import Hero from '@components/about/Hero'
import OurGoals from '@components/about/OurGoals'
import PainPoint from '@components/about/PainPoint'
import ProjectTime from '@components/about/ProjectTime'
import React from 'react'

const about = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Developer/>
        <PainPoint/>
        <OurGoals/>
        <ProjectTime/>
    </div>
  )
}

export default about