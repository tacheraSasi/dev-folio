import { motion, useScroll, useSpring, useTransform, useAnimation, useInView } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'
import { ChevronDown } from 'lucide-react'
import StarryBackground from './StarryBackground'

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

// Improved About Component
function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <section ref={ref} id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600">About Me</h2>
          <p className="text-lg mb-4 text-neutral-300">
            I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient code and stunning visuals.
          </p>
          <p className="text-lg text-neutral-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming my next big idea.
          </p>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="John Doe"
            className="rounded-lg shadow-lg"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 mix-blend-overlay rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Improved Skills Component
function Skills() {
  const skillCategories = [
    {
      title: "Tech Stack",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "PHP", icon: "🐘" },
        { name: "Go", icon: "🐹" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "🔧" },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Django", icon: "🎸" },
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟩" },
        { name: "Next.js", icon: "▲" },
        { name: "React Native", icon: "📱" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Docker", icon: "🐳" },
      ],
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Express.js", icon: "🚂" },
        { name: "Hono", icon: "🔥" },
        { name: "Fiber", icon: "🚀" },
        { name: "Gin", icon: "🍸" },
      ],
    },
  ];

  const devEnvironment = [
    { name: "OS", value: "Ubuntu 20.04 LTS, GNOME" },
    { name: "Editor", value: "VSCode, Vim" },
    { name: "Databases", value: "PostgreSQL, MySQL, SQLite" },
    { name: "Other Tools", value: "Git, Prisma, HTMX" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-green-500/20 transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-green-400 mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="flex items-center">
                    <span className="text-2xl mr-2">{skill.icon}</span>
                    <span className="text-neutral-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 bg-neutral-800 rounded-lg p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-green-400 mb-4">My Development Environment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {devEnvironment.map((item) => (
              <div key={item.name} className="flex flex-col">
                <span className="text-neutral-400">{item.name}</span>
                <span className="text-neutral-300">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function Projects() {
  const projects = [
    { title: 'E-commerce Platform', description: 'A full-stack online shopping experience with real-time inventory management', image: '/placeholder.svg?height=300&width=400', tech: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Task Management App', description: 'Boost productivity with smart task organization and team collaboration features', image: '/placeholder.svg?height=300&width=400', tech: ['React Native', 'Firebase', 'Redux'] },
    { title: 'Social Media Dashboard', description: 'Centralized analytics for multiple platforms with customizable widgets and reports', image: '/placeholder.svg?height=300&width=400', tech: ['Vue.js', 'D3.js', 'Express'] },
    { title: 'AI-powered Chatbot', description: 'Intelligent customer service automation with natural language processing', image: '/placeholder.svg?height=300&width=400', tech: ['Python', 'TensorFlow', 'Flask'] },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative overflow-hidden rounded-lg shadow-lg bg-neutral-800 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 group-hover:from-neutral-900 group-hover:via-neutral-900 group-hover:to-neutral-900 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 group-hover:justify-center">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-neutral-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-green-600 text-white px-2 py-1 rounded text-sm">{tech}</span>
                  ))}
                </div>
                <motion.button
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





// Main App Component
export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <ErrorBoundary>
      <div className="bg-neutral-900 text-white min-h-screen">
        <StarryBackground />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-green-600 transform-origin-0 z-50"
          style={{ scaleX }}
        />
        <Header />
        <main>
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
          <ErrorBoundary>
            <Skills />
          </ErrorBoundary>
          <ErrorBoundary>
            <Projects />
          </ErrorBoundary>
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}