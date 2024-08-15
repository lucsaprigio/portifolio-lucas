'use client'
import logoSvg from "../../public/logo.png";
import Image from "next/image";

export function Header() {
    return (
        <main id="header" className="relative flex flex-col space-y-7 items-center justify-start md:p-20 bg-[url('/background.png')] bg-cover bg-no-repeat after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-slate-900 after:opacity-90">
            <div className="z-50">
                <Image
                    src={logoSvg}
                    alt="Logo"
                    className="max-lg:w-72 max-lg:h-auto object-fill"
                />
            </div>
            <div className="flex flex-col items-center p-10 z-50 max-lg:p-2">
                <span className="text-3xl">Minha carreira</span>
                <span className="p-3">
                    Meu primeiro contato com programação foi em 2020, usando JavaScript. Desde então, minha jornada profissional evoluiu, e hoje trabalho com
                    NextJS, React Native, Delphi e Java Spring.
                    Este site foi criado para apresentar algumas das minhas aplicações e destacar os serviços em tecnologia que ofereço, incluindo manutenção de computadores e outros.
                    Meu objetivo é oferecer uma visão abrangente das minhas competências e projetos, criando um ponto de contato acessível para potenciais clientes e parceiros.
                </span>
            </div>
        </main>
    )
}