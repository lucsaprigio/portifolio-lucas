'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ButtonScroll } from "./button-scroll";

export function TopHome() {
    return (
        <main className="flex flex-row items-center justify-around px-20 py-32" id="sobre">
            <div className="flex flex-col p-10 w-full items-center justify-center space-y-3">
                <Image
                    className="border-2 border-lime-300 p-1 rounded-full"
                    width={240}
                    height={240}
                    objectFit="contain"
                    src="https://github.com/lucsaprigio.png"
                    alt="Imagem"
                />
                <div className="flex space-x-10">
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://www.instagram.com/lucsaprigio/">
                        <FaInstagram size={24} />
                    </Link>
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://www.linkedin.com/in/lucas-aprigio-3b17521a5/">
                        <FaLinkedin size={24} />
                    </Link>
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://github.com/lucsaprigio">
                        <FaGithub size={24} />
                    </Link>
                </div>
            </div>
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
                    <ButtonScroll targedDiv="contato">
                        <Button className="w-40 font-bold hover:brightness-75 duration-100 transition-all" variant="lime">
                            Contato
                        </Button>
                    </ButtonScroll>
                    <ButtonScroll targedDiv="projetos">
                        <Button className="w-40 font-bold" variant="accent">
                            Projetos
                        </Button>
                    </ButtonScroll>
                </div>
            </div>
        </main>
    )
}