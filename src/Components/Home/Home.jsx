import React from 'react'
import Hero from './Hero'
import About from './About'
import Header from '../../Common Components/Header'
import SteelProcess from './SteelProcess'
import Products from './Products'
import WhyChooseUs from './WhyChooseUs'
import CounterSection from './Counter'
import Footer from '../../Common Components/Footer'
import Whatsapp from '../../Common Components/Whatsapp'

export default function Home() {
  return (
    <div>
      <Whatsapp/>
      <Header />
      <Hero />
      <About />
      <Products/>
      <SteelProcess/>
      <WhyChooseUs/>
      <CounterSection/>
      <Footer />
    </div>
  )
}
