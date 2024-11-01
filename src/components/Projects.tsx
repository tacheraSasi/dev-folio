import { useInView,motion } from "framer-motion"
import { useRef } from "react"

export default function Projects() {
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