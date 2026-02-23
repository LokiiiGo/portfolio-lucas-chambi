import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export default function Habilidades() {
  const skills = [
    {
      name: 'HTML',
      text: `Marcação semântica com HTML5 e organização acessível de conteúdo.`,
      color: 'bg-orange-500', textColor: 'text-white',
      icon: './assets/html.png'
    },
    {
      name: 'CSS',
      text: `Estilização com CSS3, incluindo uso de Flexbox, Grid Layout, media queries e boas 
      práticas de organização de estilos para construção de layouts responsivos.`,
      color: 'bg-[#2093E6]',
      textColor: 'text-white',
      icon: './assets/css.png'
    },
    {
      name: 'JavaScript',
      text: `Interatividade com manipulação do DOM, eventos e criação de efeitos dinâmicos.`,
      color: 'bg-[#FFE100]',
      textColor: 'text-black',
      icon: './assets/js.png'
    },
    {
      name: 'REACT',
      text: `Criação de interfaces reativas e componentizadas, manipulação de estado com hooks e integração com bibliotecas de UI.`,
      color: 'bg-[#2C2C2C]',
      textColor: 'text-white',
      icon: './assets/react.png'
    },
    {
      name: 'TailwindCSS',
      text: `Estilização rápida e eficiente com classes utilitárias, responsividade e temas customizáveis.`,
      color: 'bg-slate-950',
      textColor: 'text-white',
      icon: './assets/tailwindcss.png'
    },
    {
      name: 'Next.JS',
      text: `Desenvolvimento full-stack com React, renderização no servidor (SSR), geração estática (SSG) e roteamento baseado em arquivos.`,
      color: 'bg-black',
      textColor: 'text-white',
      icon: './assets/nextjs-icon.png'
    },
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
                <p className="text-xl md:text-2xl leading-relaxed text-left text-muted-foreground">
                  Sou desenvolvedor web com foco em front-end, com ênfase na criação de interfaces modernas,
                  responsivas e orientadas à experiência do usuário, utilizando tecnologias de desenvolvimento web.
                  Desenvolvi uma API com operações CRUD para gerenciamento de estoque e streaming,
                  aplicando boas práticas de organização de código e integração entre front-end e back-end.
                  Busco oportunidades como desenvolvedor front-end júnior para aprofundar meus conhecimentos
                  técnicos e evoluir profissionalmente na área.
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
                transition={{ delay: index * 0 }}
                whileHover={{ scale: 1, rotate: 1 }}
                className={`${skill.color} p-6 rounded-2xl text-left font-normal text-white shadow-2xl cursor-pointer`}
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
                <div className={skill.textColor}>{skill.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}