import React from 'react'
import AboutArea from './AboutArea'
import ContactArea from './ContactArea'
import CounterArea from './CounterArea'
import FeaturesArea from './FeaturesArea'
import Herosection from './Herosection'
import OurClientsArea from './OurClientsArea'
import OurServiceArea from './OurService/OurServiceArea'
import TeamArea from './TeamArea/TeamArea'

const Home = () => {
  return (
    <>
      <Herosection />
      <FeaturesArea />
      <AboutArea />
      <OurServiceArea />
      <CounterArea />
      <TeamArea />
      <OurClientsArea />
      <ContactArea />
    </>
  )
}

export default Home