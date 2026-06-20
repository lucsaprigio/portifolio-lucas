'use client'

import Link from "next/link";
import logoSvg from "../../public/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonScroll } from "./button-scroll";
import { MenuDropdown } from "./menu-dropdown";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 12);
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main
            id="home"
            className={cn(
                "sticky top-0 z-50 flex items-center justify-around px-7 py-4 transition-all duration-300",
                isScrolled
                    ? "glass-panel border-b shadow-lg"
                    : "border-b border-transparent bg-transparent"
            )}
        >
            <Link className="flex items-center gap-2 transition-transform duration-300 hover:scale-105" href="/">
                <Image
                    src={logoSvg}
                    alt="Logo"
                    className="w-20 object-fill"
                />
                <span className="font-semibold tracking-wide">
                    LAtech
                </span>
            </Link>
            <div className="space-x-14 text-lg max-[868px]:hidden">
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
            <div className="mt-1 mr-10 min-[868px]:hidden">
                <MenuDropdown />
            </div>
        </main>
    )
}