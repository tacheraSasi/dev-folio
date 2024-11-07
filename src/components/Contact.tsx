import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import EkiliRelay from 'ekilirelay';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const mailer = new EkiliRelay(process.env.REACT_APP_RELAY_API_KEY || "");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await mailer.sendEmail(
        'receiver-email@example.com',
        `Message from ${name}`,
        `Message: ${message}\nFrom: ${name} <${email}>`,
        `From: ${name} <${email}>`
      );

      setStatus(response.status === 'success' ? "Email sent successfully!" : `Failed to send email: ${response.message}`);
    } catch (error) {
      setStatus("Error: " + (error as Error).message);
    }
  };

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
          onSubmit={handleSubmit}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
          {status && <p className="mt-4 text-center text-sm text-neutral-300">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
