import React from 'react'
import Navbar from '../components/Navbar'
import HeadSection from '../components/HeadSection'
import AboutMe from '../components/AboutMe'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FooterText from '../components/FooterText'

const HomePage = () => {


  return (
    <div>
      <Navbar />
      <HeadSection />
      <AboutMe />

      <Services />
      <Projects />
      <Testimonial />
      <Contact />

      <Footer />
      <FooterText />

    </div>
  )
}

export default HomePage