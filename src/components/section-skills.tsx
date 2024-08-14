import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

import delphiSvg from "../../public/delphi.svg";
import javaSvg from "../../public/java.svg";
import nextSvg from "../../public/nextjs.svg";
import reactSvg from "../../public/react.svg";
import nodejs from "../../public/nodejs.svg";
import typescriptSvg from "../../public/typescript.svg";

export function SectionSkills() {
    return (
        <main className="flex flex-col p-8">
            <div className="flex flex-col items-center justify-center w-full space-y-2">
                <strong className="text-3xl text-center">Tecnologias  💻</strong>
                <span>Iniciei meus estudos em 2020 com Javascript, e até então aprendi as tecnologias abaixo.</span>
            </div>
            <div className="grid grid-cols-1 p-20">
                <Accordion type="single" collapsible className="space-y-8">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex flex-row items-center gap-2">
                                <Image
                                    src={typescriptSvg}
                                    alt="Typescript"
                                />
                                <strong className="text-md">Typescript</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-md">
                            Comecei minha jornada com JavaScript, mas logo optei por migrar para TypeScript.
                            Essa escolha foi motivada pelo desejo de melhorar a manutenção do código e facilitar a leitura para toda a equipe.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <div className="flex flex-row items-center gap-2">
                                <Image
                                    src={reactSvg}
                                    alt="React"
                                />
                                <strong className="text-md">React Native</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-md">
                            Com três anos de experiência na construção de aplicações mobile, utilizei essa tecnologia tanto em projetos pessoais
                            quanto em projetos profissionais na empresa onde trabalho atualmente, a Speed Automac. Um dos resultados desse trabalho é o site da empresa,
                            desenvolvido com essa mesma tecnologia.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <div className="flex flex-row items-center gap-2">
                                <Image
                                    src={nextSvg}
                                    alt="NextJS"
                                />
                                <strong className="text-md">NextJS</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-md">
                            Iniciei meus estudos com ReactJS e, para me aprofundar mais no framework, comecei a utilizar o Next.js.
                            Com essa nova habilidade, passei a desenvolver projetos tanto na empresa quanto para clientes.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <div className="flex flex-row items-center gap-2">
                                <Image
                                    src={nodejs}
                                    alt="NodeJS"
                                />
                                <strong className="text-md">NodeJS</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-md">
                            Utilizei essa tecnologia para desenvolver APIs que integram com os sites, além de automatizar algumas tarefas com Cron, como envio de emails, mensagens pelo WhatsApp e leitura de arquivos.
                            Embora eu saiba que não é a melhor escolha para todas essas situações,
                            precisei me aprofundar nela para atender às demandas específicas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <div className="flex flex-row items-center gap-2">
                                <Image
                                    src={javaSvg}
                                    alt="Java"
                                />
                                <strong className="text-md">Java</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-md">
                            Atualmente, estou estudando Java com foco no Backend, para otimizar os servidores da empresa.
                            Meu objetivo é migrar todas as APIs para essa tecnologia, visando melhorar a performance e eficiência.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            <div className="flex flex-row items-center gap-2">
                                <Image
                                    src={delphiSvg}
                                    alt="Delphi"
                                />
                                <strong className="text-md">Delphi</strong>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-md">
                            Atualmente, utilizo essa tecnologia para auxiliar na manutenção do sistema e na criação de relatórios com o FastReport.
                            O sistema da empresa onde trabalho foi desenvolvido utilizando essa tecnologia.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main >
    )
}