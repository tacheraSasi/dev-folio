import { useRef } from "react"
import { motion,useInView } from "framer-motion"

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
  
    return (
      <section ref={ref} id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h2>
          <motion.form
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 text-neutral-300 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 text-neutral-300 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-neutral-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 text-neutral-300 bg-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-md font-semibold hover:from-green-500 hover:to-green-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>
    )
}