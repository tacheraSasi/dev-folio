import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import StarryBackground from "./StarryBackground";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Hero from "./Hero";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
  );
}
