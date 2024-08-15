'use client'
import { Contact, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ContatosJpg from '../../public/suporte.jpg'

export function FooterSection() {
    return (
        <main id="contato" className="flex flex-col items-center justify-center w-full bg-slate-900 p-10">
            <div className="flex flex-col items-center gap-8">
                <strong className="flex items-center text-3xl gap-3">
                    Contato
                    <Contact className="text-lime-300" size={32} />
                </strong>
                <span>
                    Se precisar de mais informações ou tiver alguma dúvida, não hesite em entrar em contato comigo. Será um prazer atendê-lo!
                </span>
            </div>
            <div className="grid grid-cols-2 justify-center gap-24 p-24">
                <div className="rounded-full overflow-hidden p-10">
                    <Image
                    className="rounded-full opacity-80"
                        src={ContatosJpg}
                        alt="Imagem de uma videochamada"
                    />
                </div>
                <div className="flex flex-col items-start justify-center space-y-10">
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://www.instagram.com/lucsaprigio/">
                        <FaInstagram />
                        Instagram
                    </Link>
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://www.facebook.com/lucas.aprigio.5?locale=pt_BR">
                        <FaFacebook />
                        Facebook
                    </Link>
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="https://www.linkedin.com/in/lucas-aprigio-3b17521a5/">
                        <FaLinkedin />
                        Linkedin
                    </Link>
                    <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="#">
                        <Mail />
                        lucsaprigio@hotmail.com
                    </Link>
                </div>
            </div>
        </main>
    )
}