import { motion, useScroll, useSpring, useTransform, useAnimation, useInView } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'
import { ChevronDown } from 'lucide-react'
import StarryBackground from './StarryBackground'
import Projects from './Projects'
import Skills from './Skills'

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


// Improved Hero Component
function Hero() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    })
  }, [controls])

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <motion.h1
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          John Doe
        </motion.h1>
        <motion.p
          className="text-2xl mb-8 text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting Digital Experiences with Passion
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-500 hover:to-green-700 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore My Work
        </motion.button>
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-green-300 to-green-600 opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
            }}
            animate={controls}
          />
        ))}
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <ChevronDown className="w-8 h-8 text-green-400" />
      </motion.div>
    </section>
  )
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