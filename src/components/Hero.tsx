import { useAnimation, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect } from "react"

export default function Hero() {
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
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tachera W Sasi
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Golang Enthusiast
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