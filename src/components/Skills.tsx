import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming languages",
      skills: [
        { name: "Python", icon: "https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
        { name: "JavaScript", icon: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
        { name: "TypeScript", icon: "https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
        { name: "PHP", icon: "https://img.shields.io/badge/-PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
        { name: "Go", icon: "https://img.shields.io/badge/-Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" },
        { name: "Java", icon: "https://img.shields.io/badge/-Java-007396?style=for-the-badge&logo=java&logoColor=white" },
        { name: "C++", icon: "https://img.shields.io/badge/-C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Django", icon: "https://img.shields.io/badge/-Django-092E20?style=for-the-badge&logo=django&logoColor=white" },
        { name: "React", icon: "https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
        { name: "Node.js", icon: "https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" },
        { name: "Next.js", icon: "https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" },
        { name: "React Native", icon: "https://img.shields.io/badge/-React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
        { name: "PostgreSQL", icon: "https://img.shields.io/badge/-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
        { name: "Docker", icon: "https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
      ],
    },
    {
      title: "Backend Frameworks",
      skills: [
        { name: "Express.js", icon: "https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white" },
        { name: "Hono", icon: "https://img.shields.io/badge/-Hono-FF5722?style=for-the-badge&logo=hono&logoColor=white" },
        { name: "Fiber", icon: "https://img.shields.io/badge/-Fiber-00C7B7?style=for-the-badge&logo=gofiber&logoColor=white" },
        { name: "Gin", icon: "https://img.shields.io/badge/-Gin-007396?style=for-the-badge&logo=gin&logoColor=white" },
      ],
    },
  ];

  const devEnvironment = [
    { name: "OS", value: "Ubuntu 20.04 LTS, GNOME" },
    { name: "Editor", value: "VSCode, NeoVim" },
    { name: "Databases", value: "PostgreSQL, MySQL, SQLite" },
    { name: "Other Tools", value: "Git, Prisma, HTMX" },
  ];

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
