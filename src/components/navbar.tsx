'use client'

import Link from "next/link";
import logoSvg from "../../public/logo.png";
import Image from "next/image";
import { ButtonScroll } from "./button-scroll";
import { MenuDropdown } from "./menu-dropdown";

export function Navbar() {
    return (
        <main id="home" className="flex items-center justify-around p-7 shadow-sm">
            <Link className="flex items-center hover:scale-110 duration-150" href="/">
                <Image
                    src={logoSvg}
                    alt="Logo"
                    className="w-24 object-fill"
                />
                <span>
                    Lucas Aprigio
                </span>
            </Link>
            <div className="space-x-14 text-xl max-[868px]:hidden">
                <ButtonScroll targedDiv="sobre">
                    Sobre
                    <span className="absolute -inset-x-14 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-lime-300 border-lime-300 transition-transform duration-700" />
                </ButtonScroll>
                <ButtonScroll targedDiv="stacks">
                    Stacks
                    <span className="absolute -inset-x-16 h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-lime-300 border-lime-300 transition-transform duration-700" />
                </ButtonScroll>
                <ButtonScroll targedDiv="projetos">
                    Projetos
                    <span className="absolute -inset-x-[5.4rem] h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-lime-300 border-lime-300 transition-transform duration-700" />
                </ButtonScroll>
                <ButtonScroll targedDiv="contato">
                    Contato
                    <span className="absolute -inset-x-[4.7rem] h-0.5 bottom-0 w-full group-hover/link:border-b-0 group-hover/link:translate-x-full group-hover/link:bg-lime-300 border-lime-300 transition-transform duration-700" />
                </ButtonScroll>
            </div>
            <div className="mt-2 mr-10 min-[868px]:hidden">
                <MenuDropdown />
            </div>
        </main>
    )
}