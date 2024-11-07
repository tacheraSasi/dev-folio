import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const projects = [
    {
      title: "ekiliRelay",
      description: "A free email sending API service for developers",
      image: "/ekilirelay.png",
      tech: ["PHP", "TypeScript", "Golang"],
      url: "https://relay.ekilie.com", 
    },
    {
      title: "ekiliSense",
      description: "AI-powered education management system",
      image: "/ekilisense.png",
      tech: ["PHP", "JS", "NodeJS"],
      url: "https://sense.ekilie.com", 
    },
    {
      title: "TUWK",
      description: "A rape crisis and sexual assault center",
      image: "/tuwk.png",
      tech: ["PHP", "HTML", "CSS", "JS"],
      url: "https://tuwk.tachera.com", 
    },
    {
      title: "Magreth",
      description: "AI therapist and friendly companion",
      image: "/magreth.png",
      tech: ["NextJS", "Postgres", "Drizzlekit", "TypeScript"],
      url: "https://magreth.ekilie.com", 
    },
    {
      title: "Insights",
      description: "The tech developer blog",
      image: "/insights.png",
      tech: ["Laravel", "MySQL", "PHP", "TailwindCSS"],
      url: "https://insights.ekilie.com", 
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="projects" className="min-h-screen py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative overflow-hidden rounded-lg shadow-xl bg-neutral-800 group transform transition-all duration-300 ease-in-out hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 group-hover:justify-center">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-neutral-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.url} // Use href to link to the project URL
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
