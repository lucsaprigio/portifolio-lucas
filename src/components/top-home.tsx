import Image from "next/image";
import { Button } from "./ui/button";

export function TopHome() {
    return (
        <main className="flex flex-row items-center justify-around px-14 py-14">
            <div className="flex flex-col w-full p-10 justify-center space-y-5">
                <span>Olá, me chamo</span>
                <strong className="text-3xl">Lucas Aprigio 👋</strong>
                <div className="border-b-2 border-lime-300 w-32" />
                <span className="text-md">
                    Sou formado em Análise e Desenvolvimento de Sistemas e comecei minha jornada profissional focado na criação de sites.
                    Com o tempo, fui além, desenvolvendo uma variedade de aplicações que enriqueceram meu conhecimento.
                    Hoje, sou especialista na criação de APIs robustas e aplicativos mobile inovadores, combinando expertise técnica com criatividade para entregar soluções impactantes.
                </span>
                <div className="flex gap-4 mt-3">
                    <Button className="w-40 font-bold hover:brightness-75 duration-100 transition-all" variant="lime">
                        Contato
                    </Button>
                    <Button className="w-40 font-bold" variant="accent">
                        Projetos
                    </Button>
                </div>
            </div>
            <div className="flex p-10 w-full items-center justify-center">
                <Image
                    className="border-2 border-lime-300 p-1 rounded-full"
                    width={380}
                    height={380}
                    objectFit="contain"
                    src="https://github.com/lucsaprigio.png"
                    alt="Imagem"
                />
            </div>
        </main>
    )
}