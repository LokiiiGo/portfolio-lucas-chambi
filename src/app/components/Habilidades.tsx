import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export default function Habilidades() {
    const skills = [
  { name: 'HTML', color: 'bg-orange-500', icon: './assets/html.png' },
  { name: 'CSS', color: 'bg-[#2093E6]', icon: './assets/css.png' },
  { name: 'JavaScript', color: 'bg-[#FFE100] text-black', icon: './assets/js.png' },
  { name: 'REACT', color: 'bg-[#2C2C2C]', icon: './assets/react.png' },
  { name: 'TailwindCSS', color: 'bg-slate-950', icon: './assets/tailwindcss.png' },
  { name: 'Next.JS', color: 'bg-black', icon: './assets/nextjs-icon.png' },
  { name: 'PHP', color: 'bg-[#787CB5]', icon: './assets/php.png' },
  { name: 'MySQL', color: 'bg-[#00758f]', icon: './assets/mysql-database.png' },
  { name: 'GitHub', bgColor: "text-[#fff]", color: 'bg-[#000]', icon: './assets/github.png' },
  { name: 'Git', color: 'bg-orange-700', icon: './assets/git-git.png' },
]
const isImage = (icon: string) => {
  if (typeof icon !== 'string') return false;
  return icon.endsWith('.png') || icon.endsWith('.svg') || icon.endsWith('.jpg');
};

return (
    <section id="sobre" className="py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-center">
              <span className="bg-clip-text text-white bg-gradient-to-r from-primary to-secondary">
                Sobre Mim
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="glass-dark border-2 border-primary/20 p-12">
                <div className="p-0">
                  <p className="text-xl md:text-2xl leading-relaxed text-center text-muted-foreground">
                    Sou um desenvolvedor web com foco em front-end e tenho experiência em criar interfaces de usuário
                    atraentes e funcionais.
                    Tenho paixão por tecnologia e estou sempre buscando aprender novas habilidades.
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-12 text-center">Minhas Habilidades</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.00 }} 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${skill.color} p-6 rounded-2xl text-center font-bold text-white shadow-2xl cursor-pointer`}
                >
                  <div className="text-4xl mb-2 flex justify-center items-center">
                    {isImage(skill.icon) ? (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      skill.icon
                    )}
                  </div>
                  <div className="text-base">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
)
}