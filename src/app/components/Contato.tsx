import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Github, Mail, Linkedin } from 'lucide-react'

export default function Contato(){
    return (
        <section id="contato" className="py-32 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              <span className="bg-clip-text text-white bg-gradient-to-r from-accent to-primary">
                Vamos Conversar?
              </span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Estou sempre aberto a novos projetos e colaborações. Entre em contato!
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12" 
            >
              <img
                src="/foto-lucas-chambi.jfif"
                alt="Foto de Perfil de Lucas Chambi - tirado em Agosto de 2024"
                className="w-60 h-60 rounded-2xl object-cover mx-auto border-4 border-primary shadow-lg"
              />
            </motion.div>

            <div className="flex gap-2 justify-center">
              <a href="mailto: lucascalle880@gmail.com">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="rounded-full gap-2 glass">
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                </motion.div>
              </a>

              <a href="https://www.linkedin.com/in/lucas-calle-6677ba333/" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="rounded-full gap-2 glass">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </motion.div>
              </a>
              
              <a href="https://github.com/LokiiiGo" target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="rounded-full gap-2 glass">
                    <Github className="w-4 h-4" />
                    Github
                  </Button>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    )
}