'use client'
import { Contact, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ContatosJpg from '../../public/suporte.jpg'
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactLinks = [
    { href: "https://www.instagram.com/lucsaprigio/", label: "Instagram", icon: FaInstagram },
    { href: "https://www.facebook.com/lucas.aprigio.5?locale=pt_BR", label: "Facebook", icon: FaFacebook },
    { href: "https://www.linkedin.com/in/lucas-aprigio-3b17521a5/", label: "Linkedin", icon: FaLinkedin },
];

export function FooterSection() {
    const sectionRef = useScrollReveal<HTMLDivElement>({ targets: ".reveal-item", y: 24 });

    return (
        <main id="contato" ref={sectionRef} className="flex w-full flex-col items-center justify-center bg-secondary/30 px-6 py-20 md:py-24">
            <div className="reveal-item flex max-w-2xl flex-col items-center gap-4 text-center">
                <span className="font-mono text-sm text-lime-300/90">{"// contato"}</span>
                <strong className="flex items-center gap-3 text-3xl font-bold tracking-tight md:text-4xl">
                    Vamos conversar?
                    <Contact className="text-lime-300" size={32} />
                </strong>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    Se precisar de mais informações ou tiver alguma dúvida, não hesite em entrar em contato comigo. Será um prazer atendê-lo!
                </p>
            </div>
            <div className="reveal-item grid w-full max-w-4xl gap-12 py-16 md:grid-cols-2 md:gap-24">
                <div className="overflow-hidden rounded-full p-2 md:p-10 max-lg:hidden">
                    <Image
                        className="rounded-full opacity-80"
                        src={ContatosJpg}
                        alt="Lucas Aprigio em uma videochamada de trabalho"
                    />
                </div>
                <div className="flex flex-col items-start justify-center gap-8">
                    {contactLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={label}
                            className="flex items-center gap-3 text-lg text-lime-300 transition-all duration-200 hover:translate-x-1 hover:text-lime-200"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon size={20} />
                            {label}
                        </Link>
                    ))}
                    <Link
                        className="flex items-center gap-3 text-lg text-lime-300 transition-all duration-200 hover:translate-x-1 hover:text-lime-200"
                        href="mailto:lucsaprigio@hotmail.com"
                    >
                        <Mail size={20} />
                        lucsaprigio@hotmail.com
                    </Link>
                </div>
            </div>
        </main>
    )
}