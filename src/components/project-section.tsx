'use client'
import { Cog } from 'lucide-react';
import { SectionProjectCard } from './section-project-cards';
import pertelImg from "../../public/pertel.png";
import speedImg from "../../public/speed.png";
import speedLoginImg from "../../public/speed-login.jpeg";

export function ProjectSection() {
    return (
        <main id="projetos"className="md:h-screen p-10 max-lg:p-2">
            <div className="flex flex-row items-center justify-center gap-3">
                <strong className="items-center text-3xl"> Projetos</strong>
                <Cog className="text-lime-300" size={34} />
            </div>
            <section className="flex max-lg:flex-col items-center justify-center">
                <SectionProjectCard image={pertelImg} title='Pertel Veículos' site="https://www.pertelveiculos.com.br">
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">Typescript</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">NextJS</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">NodeJS</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">Docker</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">PostgreSQL</span>
                </SectionProjectCard>
                <SectionProjectCard image={speedImg} title='Speed Automac' site="https://speedautomac.com.br">
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">Typescript</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">NextJS</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">Prisma</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">PostgreSQL</span>
                </SectionProjectCard>
                <SectionProjectCard image={speedLoginImg} title='Speed Restaurante' site="/speed-mobile">
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">Typescript</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">React Native</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">NodeJS</span>
                    <span className="bg-lime-300 p-1 rounded-lg text-zinc-950 font-semibold text-sm">FirebirdSQL</span>
                </SectionProjectCard>
            </section>
        </main>
    )
}