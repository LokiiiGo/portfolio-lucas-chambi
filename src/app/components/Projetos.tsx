'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Github, Mail, Linkedin } from 'lucide-react'

import { useState, useEffect } from 'react'


export default function Projetos() {
    const projects = [
        {
            title: 'Blog de Programação',
            description: 'Introdução ao Mundo da Programação',
            image: '/programacao-blog.png',
            link: 'https://github.com/LokiiiGo/programacao-blog',
            tags: [/* 'Blog', 'Educação', */ 'html', 'css', 'js', 'tailwindcss'],
        },
        {
            title: 'Simple Calculator',
            description: 'Calculadora simples com operações básicas de matemática',
            image: '/simple-calculator.png',
            link: 'https://github.com/LokiiiGo/simple-calculator',
            tags: [/* 'Calculadora', 'Educação' */, 'next.js', 'tailwindcss', 'react'],
        },
        {
            title: "Stokki Life",
            description: "Gerenciamento de estoque para microempreendedores",
            image: "/stokki-life.png",
            link: "https://github.com/stokki-life-tcc",
            tags: [/* 'Estoque', 'Microempreendedor'*/ 'laravel', 'tailwindcss'],
        },
        {
            title: 'SubTrack',
            description: "Gerenciador de assinaturas para controle financeiro pessoal",
            image: '/subtrack-apk.png',
            link: 'https://github.com/LokiiiGo/SubTrack',
            tags: [/* 'Finanças Pessoais', 'Assinaturas', */, 'react', 'async storage'],
        }
    ]
    const [currentProject, setCurrentProject] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    }

    return (
        <section id="projetos" className="py-32 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">
                        <span className="bg-clip-text text-white bg-gradient-to-r from-secondary to-accent">
                            Meus Projetos
                        </span>
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        <Card className="glass-dark border-2 border-secondary/20 overflow-hidden">
                            <div className="p-0">
                                <motion.div
                                    key={currentProject}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src={projects[currentProject].image ?? ''}
                                            alt={projects[currentProject].title}
                                        />
                                    </div>
                                    <div className="p-12">
                                        <div className="flex gap-2 mb-4">
                                            {projects[currentProject].tags.map((tag) => (
                                                <Badge key={tag} variant="outline" className="text-1xl mb-4">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">{projects[currentProject].title}</h3>
                                        <p className="text-1xl text-muted-foreground mb-8 leading-relaxed">
                                            {projects[currentProject].description}
                                        </p>
                                        <Button
                                            size="lg"
                                            className="rounded-full gap-2 glass" variant="outline"
                                            onPress={() =>
                                                window.open(projects[currentProject].link, '_blank', 'noopener,noreferrer')
                                            }
                                        >
                                            Ver Projeto
                                        </Button>
                                    </div>
                                </motion.div>
                            </div>
                        </Card>

                        <Button
                            onPress={prevProject}
                            size="lx"
                            variant="outline"
                            className="absolute top-1/2 -left-6 bg-black -translate-y-1/2 rounded-full w-8 h-8 glass z-10"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <Button
                            onPress={nextProject}
                            size="lx"
                            variant="outline"
                            className="absolute top-1/2 -right-6 bg-black -translate-y-1/2 rounded-full w-8 h-8 glass z-10"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>

                    <div className="flex justify-center gap-3 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentProject(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentProject ? 'bg-primary w-12' : 'bg-muted'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}