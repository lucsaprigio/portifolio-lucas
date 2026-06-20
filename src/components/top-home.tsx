'use client'
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ButtonScroll } from "./button-scroll";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const socialLinks = [
    { href: "https://www.instagram.com/lucsaprigio/", label: "Instagram", icon: FaInstagram },
    { href: "https://www.linkedin.com/in/lucas-aprigio-3b17521a5/", label: "Linkedin", icon: FaLinkedin },
    { href: "https://github.com/lucsaprigio", label: "Github", icon: FaGithub },
];

export function TopHome() {
    const sectionRef = useScrollReveal<HTMLDivElement>({ targets: ".reveal-item", y: 28 });

    return (
        <main ref={sectionRef} className="flex flex-col items-center gap-16 px-6 py-24 md:flex-row md:items-center md:justify-around md:px-20 md:py-32" id="sobre">
            <div className="reveal-item flex w-full flex-col items-center justify-center gap-6">
                <div className="group relative">
                    <div className="absolute inset-0 rounded-full bg-lime-300/20 blur-2xl transition-opacity duration-500 group-hover:opacity-80" aria-hidden="true" />
                    <Image
                        className="relative rounded-full border-2 border-lime-300 p-1 transition-transform duration-500 group-hover:scale-105"
                        width={240}
                        height={240}
                        src="https://github.com/lucsaprigio.png"
                        alt="Foto de Lucas Aprigio"
                    />
                </div>
                <div className="flex gap-8">
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={label}
                            className="flex flex-col items-center gap-2 text-lime-300 transition-all duration-200 hover:-translate-y-1 hover:text-lime-200"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                        >
                            <Icon size={26} />
                            <span className="text-xs text-muted-foreground md:hidden">{label}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="reveal-item flex w-full flex-col gap-5">
                <span className="font-mono text-sm text-lime-300/90">{"// sobre mim"}</span>
                <strong className="text-3xl font-bold tracking-tight md:text-4xl">Lucas Aprigio 👋</strong>
                <div className="h-0.5 w-28 rounded-full bg-lime-300" />
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    Sou formado em Análise e Desenvolvimento de Sistemas e comecei minha jornada profissional focado na criação de sites.
                    Com o tempo, fui além, desenvolvendo uma variedade de aplicações que enriqueceram meu conhecimento.
                    Hoje, sou especialista na criação de APIs robustas e aplicativos mobile inovadores, combinando expertise técnica com criatividade para entregar soluções impactantes.
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                    <ButtonScroll targedDiv="contato">
                        <span className="inline-flex w-full min-w-40 items-center justify-center rounded-md bg-lime-300 px-5 py-2.5 font-bold text-zinc-950 shadow-[0_0_0_1px_rgba(190,242,100,0.25),0_4px_18px_-2px_rgba(190,242,100,0.3)] transition-all duration-300 hover:brightness-90 hover:shadow-[0_0_0_1px_rgba(190,242,100,0.4),0_8px_30px_-4px_rgba(190,242,100,0.55)]">
                            Contato
                        </span>
                    </ButtonScroll>
                    <ButtonScroll targedDiv="projetos">
                        <span className="inline-flex w-full min-w-40 items-center justify-center rounded-md border border-foreground/30 px-5 py-2.5 font-bold transition-all duration-300 hover:border-lime-300/60 hover:bg-foreground/5 hover:shadow-[0_0_24px_-4px_rgba(190,242,100,0.35)]">
                            Projetos
                        </span>
                    </ButtonScroll>
                </div>
            </div>
        </main>
    )
}
