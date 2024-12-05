import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 m-5 left-0 right-0 z-50 transition-all duration-300 px-5 ${
        isScrolled
          ? "bg-neutral-800 bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <motion.a
          href="./"
          className="text-2xl font-bold text-green-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Tach
        </motion.a>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden block text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-green-400 transition-colors"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-full left-0 w-full rounded-lg mt-2 bg-neutral-800 bg-opacity-90 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <ul className="flex flex-col items-center space-y-4 py-4">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white hover:text-green-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
