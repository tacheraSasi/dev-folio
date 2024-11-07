import { ChevronDown, Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
    return (
      <footer className="bg-neutral-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-neutral-300">
            © {new Date().getFullYear()} Tachera W Sasi. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            {/* <a href="#" className="text-neutral-400 hover:text-green-400 transition-colors duration-300">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a> */}
            <a href="https://github.com/tacheraSasi" className="text-neutral-400 hover:text-green-400 transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/tachera-w-sasi-506307286" className="text-neutral-400 hover:text-green-400 transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:tacherasasi@gmail.com" className="text-neutral-400 hover:text-green-400 transition-colors duration-300">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    )
}