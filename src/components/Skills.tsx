import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { devEnvironment, skillCategories } from "../utils/lib";

export default function Skills() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="skills" className="min-h-screen flex items-center justify-center py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
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
              className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-green-500/30 cursor-pointer transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-green-400 mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-2">
                    <img src={skill.icon} alt={`${skill.name} icon`}  />
                    {/* <span className="text-neutral-300">{skill.name}</span> */}
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
              <div key={item.name} className="flex flex-col space-y-1">
                <span className="text-neutral-400 font-medium">{item.name}</span>
                <span className="text-neutral-300">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
