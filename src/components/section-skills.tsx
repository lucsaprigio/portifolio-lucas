'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

gsap.registerPlugin(ScrollTrigger);

import delphiSvg from "../../public/delphi.svg";
import nextSvg from "../../public/nextjs.svg";
import reactSvg from "../../public/react.svg";
import nodejs from "../../public/nodejs.svg";
import typescriptSvg from "../../public/typescript.svg";
import golangSvg from "../../public/golang.svg";
import javaSvg from "../../public/java.svg";

type TimelineItem = {
    id: string;
    name: string;
    icon: typeof reactSvg;
    duration: string;
    description: string;
};

// Tempo de experiência por tecnologia, do mais para o menos experiente.
// NOTA: durações de TypeScript e React Native são estimativas com base na narrativa
// já existente no conteúdo do site (ver relatório da sessão) — a confirmar com o autor.
const timeline: TimelineItem[] = [
    {
        id: "react",
        name: "React",
        icon: reactSvg,
        duration: "6 anos",
        description:
            "Base do meu trabalho com front-end web e mobile. É a tecnologia que mais utilizo no dia a dia, tanto em projetos pessoais quanto profissionais na Speed Automac, incluindo o uso de React Native para aplicações mobile.",
    },
    {
        id: "typescript",
        name: "TypeScript",
        icon: typescriptSvg,
        duration: "~4 anos",
        description:
            "Comecei minha jornada com JavaScript e logo optei por migrar para TypeScript, buscando melhorar a manutenção do código e facilitar a leitura para toda a equipe.",
    },
    {
        id: "react-native",
        name: "React Native",
        icon: reactSvg,
        duration: "3 anos",
        description:
            "Utilizado tanto em projetos pessoais quanto profissionais na Speed Automac. Um dos resultados desse trabalho é o app da empresa, desenvolvido com essa tecnologia.",
    },
    {
        id: "delphi",
        name: "Delphi",
        icon: delphiSvg,
        duration: "3 anos — atualmente",
        description:
            "Tecnologia que utilizo até hoje no dia a dia, na manutenção do sistema da empresa onde trabalho e na criação de relatórios com o FastReport. Atualmente trabalho com Delphi e Go, e entre as integrações mais recentes que desenvolvi estão a do Melhor Envio e as das APIs do Sicredi e do Banco do Brasil.",
    },
    {
        id: "java",
        name: "Java / Spring Boot",
        icon: javaSvg,
        duration: "3 anos",
        description:
            "Trabalhei por 3 anos com Java utilizando o Spring Boot no desenvolvimento de aplicações back-end. Atuei na construção de APIs REST reais em produção, com autenticação via JWT, persistência com JPA, geração de relatórios com JasperReports e integrações com documentos fiscais eletrônicos (DF-e). Implementei mensageria com RabbitMQ para tornar a aplicação escalável: o fluxo de XML de uma empresa levava cerca de 120 segundos na compactação e envio por e-mail, então passei esse processamento para uma fila, liberando a requisição e fazendo o envio de forma assíncrona.",
    },
    {
        id: "go",
        name: "Go",
        icon: golangSvg,
        duration: "atualmente",
        description:
            "Tecnologia que utilizo atualmente no dia a dia, em paralelo com o Delphi. Fui atraído pela simplicidade da sintaxe e pela performance em aplicações concorrentes, e venho aplicando isso em integrações recentes, como a do Melhor Envio e as das APIs do Sicredi e do Banco do Brasil.",
    },
];

const tools = [
    { name: "Next.js", icon: nextSvg },
    { name: "Node.js", icon: nodejs },
];

export function SectionSkills() {
    const sectionRef = useScrollReveal<HTMLDivElement>({ targets: ".reveal-item", y: 24, stagger: 0.08 });
    const olRef = useRef<HTMLOListElement>(null);
    const lineRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const ol = olRef.current;
        const line = lineRef.current;
        if (!ol || !line) return;

        const items = gsap.utils.toArray<HTMLElement>(ol.querySelectorAll(".timeline-item"));
        const markers = gsap.utils.toArray<HTMLElement>(ol.querySelectorAll(".timeline-marker"));
        if (items.length === 0) return;

        // Respeita usuários que preferem menos movimento: mostra tudo já posicionado.
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            gsap.set(line, { scaleY: 1 });
            gsap.set([...items, ...markers], { autoAlpha: 1, y: 0, scale: 1 });
            return;
        }

        gsap.set(line, { scaleY: 0, transformOrigin: "top" });
        gsap.set(items, { autoAlpha: 0, y: 36 });
        gsap.set(markers, { autoAlpha: 0, scale: 0, transformOrigin: "center" });

        // Cada tecnologia "acende" em sequência conforme a linha desce de cima para baixo.
        const step = 0.45;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ol,
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        tl.to(line, { scaleY: 1, duration: step * items.length, ease: "none" }, 0);

        items.forEach((item, i) => {
            const at = i * step;
            tl.to(markers[i], { autoAlpha: 1, scale: 1, duration: 0.35, ease: "back.out(2)" }, at);
            tl.to(item, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" }, at + 0.08);
        });

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    }, []);

    return (
        <main id="stacks" ref={sectionRef} className="flex flex-col px-6 py-20 md:px-8 md:py-24">
            <div className="reveal-item mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-3 text-center">
                <span className="font-mono text-sm text-lime-300/90">{"// tecnologias"}</span>
                <strong className="text-3xl font-bold tracking-tight md:text-4xl">Tecnologias 💻</strong>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    Iniciei meus estudos em 2020 com JavaScript e, desde então, expandi meu conhecimento para diversas tecnologias.
                    Abaixo, uma linha do tempo com o tempo de experiência em cada uma.
                </p>
            </div>

            <div className="mx-auto w-full max-w-3xl py-14 md:py-16">
                <ol ref={olRef} className="relative flex flex-col gap-10 pl-10 sm:pl-12">
                    {/* Trilha discreta da timeline */}
                    <span className="absolute left-0 top-0 h-full w-px bg-border/60" aria-hidden="true" />
                    {/* Linha lime que "acende" de cima para baixo conforme a seção entra na tela */}
                    <span
                        ref={lineRef}
                        className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-lime-300 via-lime-300/70 to-lime-300/20 shadow-[0_0_8px_rgba(190,242,100,0.6)]"
                        aria-hidden="true"
                    />
                    {timeline.map((item) => (
                        <li key={item.id} className="timeline-item relative">
                            {/* Marcador da timeline, alinhado com a linha condutora à esquerda */}
                            <span
                                className="timeline-marker absolute -left-[2.45rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-lime-300/50 bg-background shadow-[0_0_0_4px_hsl(var(--background)),0_0_12px_rgba(190,242,100,0.45)] sm:-left-[3.15rem]"
                                aria-hidden="true"
                            >
                                <Image src={item.icon} alt="" className="h-5 w-5" />
                            </span>

                            <div className="glass-panel flex flex-col gap-2 rounded-lg p-5 transition-colors duration-300 hover:border-lime-300/40">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div className="flex items-center gap-3">
                                        <Image src={item.icon} alt={item.name} className="h-7 w-7 sm:hidden" />
                                        <strong className="text-base">{item.name}</strong>
                                    </div>
                                    <Badge className="border-lime-300/40 bg-lime-300/10 text-lime-300 hover:bg-lime-300/15">
                                        {item.duration}
                                    </Badge>
                                </div>
                                <p className="text-base leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="reveal-item mx-auto flex w-full max-w-3xl flex-col items-center gap-4 border-t border-border/60 pt-10 text-center">
                <span className="text-sm font-medium text-muted-foreground">
                    Frameworks e ferramentas que utilizo no dia a dia
                </span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {tools.map((tool) => (
                        <Badge
                            key={tool.name}
                            variant="secondary"
                            className="flex items-center gap-2 px-3 py-1.5 text-sm"
                        >
                            <Image src={tool.icon} alt="" className="h-4 w-4" aria-hidden="true" />
                            {tool.name}
                        </Badge>
                    ))}
                </div>
            </div>
        </main>
    )
}
