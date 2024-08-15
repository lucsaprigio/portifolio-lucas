'use client'
import Image from "next/image";
import logoSvg from "../../public/logo-fundo.svg";
import { ButtonScroll } from "./button-scroll";
import { ArrowUp } from "lucide-react";

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-slate-900 p-10">
            <Image
                src={logoSvg}
                alt="Logo"
                className="w-48 object-fill"
            />
            <div className="flex items-center justify-center w-full bg-slate-950 p-3 rounded-md">
                <span className="text-sm">
                    © 2024 Powered by Lucas Aprigio
                </span>
            </div>
            <div>
                <ButtonScroll targedDiv="home">
                    <div className="flex w-full items-center justify-center text-sm text-right mt-10 gap-3">
                        <ArrowUp size={18}/>
                        <span>Voltar para o topo</span>
                    </div>
                </ButtonScroll>
            </div>
        </footer >
    )
}