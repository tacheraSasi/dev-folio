import { useAnimation, useInView ,motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function About() {
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