'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Journey from '@/components/sections/Journey'
import Certificates from '@/components/sections/Certificates'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}
