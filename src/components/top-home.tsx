'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ButtonScroll } from "./button-scroll";

export function TopHome() {
    return (
        <main className="flex flex-row items-center justify-around px-20 py-32 max-lg:flex-col max-lg:p-1" id="sobre">
            <div className="flex flex-col p-10 w-full items-center justify-center space-y-3">
                <Image
                    className="border-2 border-lime-300 p-1 rounded-full"
                    width={240}
                    height={240}
                    objectFit="contain"
                    src="https://github.com/lucsaprigio.png"
                    alt="Imagem"
                />
                <div className="flex space-x-10 max-lg:hidden">
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://www.instagram.com/lucsaprigio/" target="blank">
                        <FaInstagram size={24} />
                    </Link>
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://www.linkedin.com/in/lucas-aprigio-3b17521a5/" target="blank">
                        <FaLinkedin size={24} />
                    </Link>
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://github.com/lucsaprigio" target="blank">
                        <FaGithub size={24} />
                    </Link>
                </div>
                <div className="flex space-x-10 md:hidden">
                    <Link className="flex flex-col gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://www.instagram.com/lucsaprigio/" target="blank">
                        <FaInstagram size={32} />
                        <span>Instagram</span>
                    </Link>
                    <Link className="flex flex-col gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://www.linkedin.com/in/lucas-aprigio-3b17521a5/" target="blank">
                        <FaLinkedin size={32} />
                        <span>Linkedin</span>

                    </Link>
                    <Link className="flex flex-col gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://github.com/lucsaprigio" target="blank">
                        <FaGithub size={32} />
                        <span>Github</span>
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
                        <div className="w-40 font-bold hover:brightness-75 duration-100 transition-all bg-lime-300 p-1 rounded-md text-zinc-950">
                            <span >
                                Contato
                            </span>
                        </div>
                    </ButtonScroll>
                    <ButtonScroll targedDiv="projetos">
                        <div className="w-40 font-bold hover:brightness-75 hover:bg-gray-50 hover:text-zinc-950 duration-100 transition-all border-[1px] p-1 rounded-md">
                            <span >
                                Projetos
                            </span>
                        </div>
                    </ButtonScroll>

                </div>
            </div>
        </main>
    )
}