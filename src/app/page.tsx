'use client'

{/* importando todos os componentes do projeto */}
import Cabecalho from './components/Cabecalho'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Rodape from './components/Rodape'

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