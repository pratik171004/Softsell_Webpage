import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className='w-screen h-full '>
             <Hero />
             <HowItWorks />
             <WhyChooseUs />
             < Testimonials/>
             < ContactForm/>
    </div>
  )
}

export default App