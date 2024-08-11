import { Cog } from 'lucide-react';
import { SectionProjectCard } from './section-project-cards';
import pertelImg from "../../public/pertel.png";

export function ProjectSection() {
    return (
        <main className="h-screen p-10">
            <div className="flex flex-row items-center justify-center gap-3">
                <strong className="items-center text-3xl"> Projetos</strong>
                <Cog className="text-lime-300" size={34} />
            </div>
            <section>
                <SectionProjectCard image={pertelImg} title='Pertel Veículos'>
                    <span>Teste</span>
                    <span>Teste</span>
                </SectionProjectCard>
            </section>
        </main>
    )
}