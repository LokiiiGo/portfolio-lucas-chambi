import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <header className="text-center text-white mt-10">
        <Link href="#" className="mr-10">Home</Link>
        <Link href="#about" className="mr-10">Sobre</Link>
        <Link href="#projetos" className="mr-10">Projetos</Link>
        <Link href="#contato" className="mr-10 ">Contato</Link>
      </header>

      <main className="text-white text-center mt-10">
        <p className="text-3xl mb-5">Olá, sou Lucas Bruno Calle Chambi</p>
        <p className="text-3xl mb-5">Desenvolvedor Web</p>
      </main>

      <article className="bg-white p-20 pr-20 pl-20 pt-5 mr-20 ml-20 text-center rounded-lg min-h-screen">
        <h2 className="text-4xl font-bold text-black pt-1">Sobre mim</h2>
        <div className="mb-10 border-2 border-black"></div>
        <p className="text-xl text-black">Sou um desenvolvedor web com foco em front-end e tenho experiência em criar interfaces de usuário atraentes e funcionais.
          Tenho paixão por tecnologia e estou sempre buscando aprender novas habilidades.</p>
        <div className="mb-20 pb-15"></div>
        <h2 className="text-4xl font-bold text-black pt-1">Minhas Habilidades</h2>
        <div className="mb-10 border-2 border-black"></div>
        <div className="flex flex-row justify-center">
          <div className="basis-64 bg-[#474A8A] p-5 rounded-lg mr-5">PHP</div>
          <div className="basis-64 bg-[#FFE100] p-5 rounded-lg mr-5">JavaScript</div>
          <div className="basis-64 bg-[#F1892D] p-5 rounded-lg mr-5">HTML</div>
          <div className="basis-64 bg-[#00C4C1] p-5 rounded-lg mr-5">REACT</div>
          <div className="basis-64 bg-[#5FBCFF] p-5 rounded-lg mr-5">TAILWINDCSS</div>
          <div className="basis-64 bg-[#5400C1] p-5 rounded-lg mr-5">CSS</div>
          <div className="basis-64 bg-[#000000] p-5 rounded-lg mr-5">Next.JS</div>          
          <div className="basis-64 bg-[#202020] p-5 rounded-lg mr-5">GitHub</div>
          <div className="basis-64 bg-[#C54F00] p-5 rounded-lg mr-5">Git</div>
          <div className="basis-64 bg-[#006ECE] p-5 rounded-lg mr-5">MySQL</div>
        </div>
      </article>
      <div className="mb-30"></div>
      <article className="bg-white p-20 pr-20 pl-20 pt-5 mr-20 ml-20 text-center rounded-lg min-h-screen">
        <h2 className="text-4xl font-bold text-black pt-1">Meus Projetos</h2>
        <div className="mb-10 border-2 border-black"></div>
      </article>
    </div>
  )
}