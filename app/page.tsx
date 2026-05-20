import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main className="p-10 space-y-20">
      <section className="relative h-screen flex items-center justify-center">
        <motion.div className="text-center space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1 className="text-6xl font-bold">Welcome to Futuristic SaaS</h1>
          <p className="text-lg">Experience the cutting-edge technology that's changing the world.</p>
          <motion.button className="p-4 bg-secondary text-dark rounded-md" whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            Get Started
          </motion.button>
        </motion.div>
      </section>
      <section>
        {/* More sections and animations */}
      </section>
    </main>
  );
}