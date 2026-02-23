import { motion } from 'framer-motion'

export default function Sobre(){
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-black mb-6 text-balance"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 text-muted-foreground"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Lucas Bruno Calle Chambi
            </motion.h2>
            <motion.p
              className="text-2xl md:text-3xl text-muted-foreground mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Desenvolvedor Front-End
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center"
            >
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
}