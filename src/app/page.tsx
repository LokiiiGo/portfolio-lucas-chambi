'use client'

{/* importando todos os componentes do projeto */}
import Rodape from './components/Rodape'
import Contato from './components/Contato'
import Projetos from './components/Projetos'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Cabecalho from './components/Cabecalho'

export default function Home() {
  return (
    <div className="min-h-screen oswald overflow-hidden">

      {/* Cabeçalho principal */}
      <Cabecalho />

      {/* Sobre mim */}
      <Sobre />

      {/* Objetivo e minhas habilidades */}
      <Habilidades />

      {/* Seção de projetos */}
      <Projetos />

      {/* Contato */}
      <Contato />

      {/* Rodapé */}
      <Rodape />
    </div>
  )
}