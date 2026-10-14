import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Approach from './components/Approach'
import Visit from './components/Visit'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Appointment from './components/Appointment'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  // The treatment chosen on the page is passed down to the booking form.
  const [service, setService] = useState('')

  const bookService = useCallback((name) => {
    setService(name)
    document.getElementById('book')?.scrollIntoView()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero onBook={bookService} />
        <Services onBook={bookService} />
        <About />
        <Approach />
        <Visit />
        <Reviews />
        <Faq />
        <Appointment service={service} onServiceChange={setService} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
