import { motion, useScroll, useSpring, useTransform, useAnimation, useInView } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'
import { ChevronDown } from 'lucide-react'
import StarryBackground from './StarryBackground'
import Projects from './Projects'
import Skills from './Skills'
import About from './About'
import Hero from './Hero'

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Oops, something went wrong!</h2>
            <p className="text-neutral-300 mb-4">We're sorry for the inconvenience. Please try refreshing the page.</p>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}


export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <div className="bg-neutral-900 text-white min-h-screen">
        <StarryBackground />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-green-600 transform-origin-0 z-50"
          style={{ scaleX }}
        />
        <Header />
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}