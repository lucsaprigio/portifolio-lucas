'use client'
import { Cog } from 'lucide-react';
import { SectionProjectCard } from './section-project-cards';
import pertelImg from "../../public/pertel.png";
import speedImg from "../../public/speed.png";
import speedLoginImg from "../../public/speed-login.jpeg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const techBadgeClass = "rounded-lg bg-lime-300 px-2 py-1 text-sm font-semibold text-zinc-950";

export function ProjectSection() {
    const sectionRef = useScrollReveal<HTMLDivElement>({ targets: ".reveal-item", y: 28, stagger: 0.1 });

    return (
        <main id="projetos" ref={sectionRef} className="px-6 py-20 md:px-10 md:py-24">
            <div className="reveal-item mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
                <span className="font-mono text-sm text-lime-300/90">{"// projetos"}</span>
                <div className="flex flex-row items-center justify-center gap-3">
                    <strong className="text-3xl font-bold tracking-tight md:text-4xl">Projetos</strong>
                    <Cog className="animate-spin-slow text-lime-300" size={32} />
                </div>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    Uma seleção de aplicações que desenvolvi, do front-end ao back-end, para empresas e clientes.
                </p>
            </div>
            <section className="mx-auto mt-14 flex max-w-6xl flex-wrap items-stretch justify-center gap-8">
                <div className="reveal-item">
                    <SectionProjectCard image={pertelImg} title='Pertel Veículos' site="https://www.pertelveiculos.com.br">
                        <span className={techBadgeClass}>Typescript</span>
                        <span className={techBadgeClass}>NextJS</span>
                        <span className={techBadgeClass}>NodeJS</span>
                        <span className={techBadgeClass}>Docker</span>
                        <span className={techBadgeClass}>PostgreSQL</span>
                    </SectionProjectCard>
                </div>
                <div className="reveal-item">
                    <SectionProjectCard image={speedImg} title='Speed Automac' site="https://speedautomac.com.br">
                        <span className={techBadgeClass}>Typescript</span>
                        <span className={techBadgeClass}>NextJS</span>
                        <span className={techBadgeClass}>Prisma</span>
                        <span className={techBadgeClass}>PostgreSQL</span>
                    </SectionProjectCard>
                </div>
                <div className="reveal-item">
                    <SectionProjectCard image={speedLoginImg} title='Speed Restaurante' site="/speed-mobile">
                        <span className={techBadgeClass}>Typescript</span>
                        <span className={techBadgeClass}>React Native</span>
                        <span className={techBadgeClass}>NodeJS</span>
                        <span className={techBadgeClass}>FirebirdSQL</span>
                    </SectionProjectCard>
                </div>
            </section>
        </main>
    )
}