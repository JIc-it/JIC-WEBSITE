import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../common/Context'
import AboutArea from './AboutArea'
import ContactArea from './ContactArea'
import CounterArea from './CounterArea'
import FeaturesArea from './FeaturesArea'
import Herosection from './Herosection'
import OurClientsArea from './OurClientsArea'
import OurServiceArea from './OurService/OurServiceArea'
import TeamArea from './TeamArea/TeamArea'

const Home = () => {
  const { IsMObile, setIsMObile } = useContext(Context)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

  }, [])

  const handleResize = () => {
    if (window.innerWidth < 575) {
      setIsMObile(true)
    } else {
      setIsMObile(false)
    }
  }


  console.log({ IsMObile })

  return (
    <>
      <Herosection />
      {IsMObile ?
        <>
          <AboutArea />
          <FeaturesArea />
        </>
        :
        <>
          <FeaturesArea />
          <AboutArea />
        </>
      }
      <OurServiceArea />
      <CounterArea />
      {/* <TeamArea /> */}
      <OurClientsArea />
      <ContactArea />
    </>
  )
}

export default Home