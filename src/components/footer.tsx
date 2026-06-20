'use client'
import Image from "next/image";
import logoSvg from "../../public/logo.png";
import { ButtonScroll } from "./button-scroll";
import { ArrowUp } from "lucide-react";

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center gap-6 border-t border-border/60 bg-background px-10 py-10">
            <Image
                src={logoSvg}
                alt="Logo LATech"
                className="w-40 object-fill opacity-90"
            />
            <div className="flex w-full max-w-xs items-center justify-center rounded-md bg-secondary/60 p-3">
                <span className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Powered by Lucas Aprigio
                </span>
            </div>
            <ButtonScroll targedDiv="home">
                <span className="flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-lime-300">
                    <ArrowUp size={18} />
                    Voltar para o topo
                </span>
            </ButtonScroll>
        </footer>
    )
}