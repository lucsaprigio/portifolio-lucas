'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

import delphiSvg from "../../public/delphi.svg";
import javaSvg from "../../public/java.svg";
import nextSvg from "../../public/nextjs.svg";
import reactSvg from "../../public/react.svg";
import nodejs from "../../public/nodejs.svg";
import typescriptSvg from "../../public/typescript.svg";
import golangSvg from "../../public/golang.svg";

export function SectionSkills() {
    const sectionRef = useScrollReveal<HTMLDivElement>({ targets: ".reveal-item", y: 24, stagger: 0.08 });

    return (
        <main id="stacks" ref={sectionRef} className="flex flex-col px-6 py-20 md:px-8 md:py-24">
            <div className="reveal-item mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-3 text-center">
                <span className="font-mono text-sm text-lime-300/90">{"// tecnologias"}</span>
                <strong className="text-3xl font-bold tracking-tight md:text-4xl">Tecnologias 💻</strong>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    Iniciei meus estudos em 2020 com JavaScript e, desde então, expandi meu conhecimento para diversas tecnologias, incluindo as listadas abaixo.
                </p>
            </div>
            <div className="mx-auto w-full max-w-3xl py-14 md:py-16">
                <Accordion type="single" collapsible className="flex flex-col gap-4">
                    <AccordionItem value="item-1" className="reveal-item glass-panel rounded-lg border-b-0 px-5 transition-colors duration-300 hover:border-lime-300/40">
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-row items-center gap-3">
                                <Image
                                    src={typescriptSvg}
                                    alt="Typescript"
                                    className="h-8 w-8"
                                />
                                <strong className="text-base">Typescript</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                            Comecei minha jornada com JavaScript, mas logo optei por migrar para TypeScript.
                            Essa escolha foi motivada pelo desejo de melhorar a manutenção do código e facilitar a leitura para toda a equipe.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="reveal-item glass-panel rounded-lg border-b-0 px-5 transition-colors duration-300 hover:border-lime-300/40">
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-row items-center gap-3">
                                <Image
                                    src={reactSvg}
                                    alt="React"
                                    className="h-8 w-8"
                                />
                                <strong className="text-base">React Native</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                            Com três anos de experiência na construção de aplicações mobile, utilizei essa tecnologia tanto em projetos pessoais
                            quanto em projetos profissionais na empresa onde trabalho atualmente, a Speed Automac. Um dos resultados desse trabalho é o site da empresa,
                            desenvolvido com essa mesma tecnologia.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="reveal-item glass-panel rounded-lg border-b-0 px-5 transition-colors duration-300 hover:border-lime-300/40">
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-row items-center gap-3">
                                <Image
                                    src={nextSvg}
                                    alt="NextJS"
                                    className="h-8 w-8"
                                />
                                <strong className="text-base">NextJS</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                            Iniciei meus estudos com ReactJS e, para me aprofundar mais no framework, comecei a utilizar o Next.js.
                            Com essa nova habilidade, passei a desenvolver projetos tanto na empresa quanto para clientes.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="reveal-item glass-panel rounded-lg border-b-0 px-5 transition-colors duration-300 hover:border-lime-300/40">
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-row items-center gap-3">
                                <Image
                                    src={nodejs}
                                    alt="NodeJS"
                                    className="h-8 w-8"
                                />
                                <strong className="text-base">NodeJS</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                            Utilizei essa tecnologia para desenvolver APIs que integram com os sites, além de automatizar algumas tarefas com Cron, como envio de emails, mensagens pelo WhatsApp e leitura de arquivos.
                            Embora eu saiba que não é a melhor escolha para todas essas situações,
                            precisei me aprofundar nela para atender às demandas específicas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="reveal-item glass-panel rounded-lg border-b-0 px-5 transition-colors duration-300 hover:border-lime-300/40">
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-row items-center gap-3">
                                <Image
                                    src={javaSvg}
                                    alt="Java"
                                    className="h-8 w-8"
                                />
                                <strong className="text-base">Java</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                            Atualmente, estou estudando Java com foco no Backend, para otimizar os servidores da empresa.
                            Meu objetivo é migrar todas as APIs para essa tecnologia, visando melhorar a performance e eficiência.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6" className="reveal-item glass-panel rounded-lg border-b-0 px-5 transition-colors duration-300 hover:border-lime-300/40">
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-row items-center gap-3">
                                <Image
                                    src={delphiSvg}
                                    alt="Delphi"
                                    className="h-8 w-8"
                                />
                                <strong className="text-base">Delphi</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                            Atualmente, utilizo essa tecnologia para auxiliar na manutenção do sistema e na criação de relatórios com o FastReport.
                            O sistema da empresa onde trabalho foi desenvolvido utilizando essa tecnologia.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7" className="reveal-item glass-panel rounded-lg border-b-0 px-5 transition-colors duration-300 hover:border-lime-300/40">
                        <AccordionTrigger className="hover:no-underline">
                            <div className="flex flex-row items-center gap-3">
                                <Image
                                    src={golangSvg}
                                    alt="Go"
                                    className="h-8 w-8"
                                />
                                <strong className="text-base">Go</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                            Go é minha tecnologia mais recente de estudo. Ainda não tive a oportunidade de usá-la profissionalmente,
                            mas tenho me dedicado a aprender a linguagem por conta própria, atraído pela simplicidade da sintaxe e pela
                            performance em aplicações concorrentes. O objetivo é evoluir esse conhecimento até o ponto de aplicá-lo em
                            projetos reais, especialmente na construção de APIs.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main >
    )
}