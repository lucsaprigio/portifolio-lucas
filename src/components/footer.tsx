'use client'
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logoSvg from "../../public/logo.png";
import { ButtonScroll } from "./button-scroll";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const navLinks = [
    { targedDiv: "sobre", label: "Sobre" },
    { targedDiv: "stacks", label: "Stacks" },
    { targedDiv: "projetos", label: "Projetos" },
];

const socialLinks = [
    { href: "https://www.instagram.com/lucsaprigio/", label: "Instagram", icon: FaInstagram },
    { href: "https://www.facebook.com/lucas.aprigio.5?locale=pt_BR", label: "Facebook", icon: FaFacebook },
    { href: "https://www.linkedin.com/in/lucas-aprigio-3b17521a5/", label: "Linkedin", icon: FaLinkedin },
];

/**
 * Rodapé único do site (fusão do antigo bloco de contato + créditos finais).
 * Estrutura inspirada em footers de portfólio dev de alto impacto: CTA grande,
 * colunas de navegação/redes sociais e uma linha final de créditos — mas com
 * conteúdo, identidade visual e paleta (lime-300) próprios do Lucas.
 */
export function Footer() {
    const sectionRef = useScrollReveal<HTMLDivElement>({ targets: ".reveal-item", y: 24 });

    return (
        <footer id="contato" ref={sectionRef} className="relative overflow-hidden border-t border-border/60 bg-secondary/20">
            <div className="bg-grid mask-fade-bottom pointer-events-none absolute inset-0 z-0 opacity-20" aria-hidden="true" />

            {/* Bloco principal: chamada para ação grande, no estilo "assinatura" */}
            <div className="reveal-item relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center md:py-28">
                <span className="font-mono text-sm text-lime-300/90">{"// vamos trabalhar juntos"}</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                    Tem um projeto em mente?
                    <br className="hidden sm:block" /> Vamos{" "}
                    <span className="text-lime-300 text-glow">conversar</span>.
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    Estou disponível para novas oportunidades, parcerias e projetos freelance.
                    Me envie uma mensagem e responderei o mais rápido possível.
                </p>
                <Link
                    href="mailto:lucsaprigio@hotmail.com"
                    className="group mt-2 inline-flex items-center gap-3 rounded-full bg-lime-300 px-7 py-3.5 font-bold text-zinc-950 shadow-[0_0_0_1px_rgba(190,242,100,0.3),0_4px_24px_-4px_rgba(190,242,100,0.4)] transition-all duration-300 hover:brightness-90 hover:shadow-[0_0_0_1px_rgba(190,242,100,0.5),0_8px_32px_-4px_rgba(190,242,100,0.6)]"
                >
                    <Mail size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                    lucsaprigio@hotmail.com
                </Link>
            </div>

            <Separator />

            {/* Colunas: navegação, redes sociais e identidade */}
            <div className="reveal-item relative z-10 mx-auto grid w-full max-w-5xl gap-10 px-6 py-14 sm:grid-cols-3 md:py-16">
                <div className="flex flex-col items-center gap-4 sm:items-start">
                    <span className="font-semibold tracking-wide">LAtech</span>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-left">
                        Desenvolvimento de sistemas e tecnologia, com foco em front-end, mobile e soluções sob medida.
                    </p>
                </div>

                <nav className="flex flex-col items-center gap-3 sm:items-start" aria-label="Navegação do rodapé">
                    <span className="text-sm font-semibold text-foreground">Navegação</span>
                    {navLinks.map(({ targedDiv, label }) => (
                        <ButtonScroll key={targedDiv} targedDiv={targedDiv}>
                            <span className="text-sm text-muted-foreground transition-colors duration-200 hover:text-lime-300">
                                {label}
                            </span>
                        </ButtonScroll>
                    ))}
                </nav>

                <div className="flex flex-col items-center gap-3 sm:items-start">
                    <span className="text-sm font-semibold text-foreground">Redes sociais</span>
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={label}
                            className="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-lime-300"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon size={16} className="text-lime-300" />
                            {label}
                        </Link>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Linha final de créditos */}
            <div className="reveal-item relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
                <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                    <Image src={logoSvg} alt="Logo LATech" className="w-12 object-fill opacity-90" />
                </Link>
                <span className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Powered by Lucas Aprigio
                </span>
                <ButtonScroll targedDiv="home">
                    <span className="flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:text-lime-300 hover:shadow-[0_0_18px_-4px_rgba(190,242,100,0.4)]">
                        <ArrowUp size={16} />
                        Voltar para o topo
                    </span>
                </ButtonScroll>
            </div>
        </footer>
    )
}

function Separator() {
    return <div className="relative z-10 mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-border to-transparent" />;
}
