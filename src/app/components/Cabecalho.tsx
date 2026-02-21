import { motion } from 'framer-motion'

export default function Cabecalho() {
    return (
        <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >

          </motion.div>
          <div className="flex gap-8">
            {['Home', 'Sobre', 'Projetos', 'Contato'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.00 }}
                whileHover={{ scale: 1.5, color: 'var(--color-primary)' }}
                className="text-sm transition-colors hover:text-primary font-extrabold"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>
    )
}