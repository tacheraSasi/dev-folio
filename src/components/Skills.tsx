import { motion, useInView } from "framer-motion"
import { useRef } from "react";

export default function Skills() {
    const skillCategories = [
      {
        title: "Programming languages",
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