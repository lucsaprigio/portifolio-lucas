import { Contact, GithubIcon, InstagramIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";

export function FooterSection() {
    return (
        <main className="flex flex-col items-center justify-center w-full bg-slate-900 p-10">
            <div className="flex flex-col items-center gap-8">
                <strong className="flex items-center text-3xl gap-3">
                    Contato
                    <Contact className="text-lime-300" size={32}/>
                </strong>
                <span>
                    Se precisar de mais informações ou tiver alguma dúvida, não hesite em entrar em contato comigo. Será um prazer atendê-lo!
                </span>
            </div>
            <div className="grid grid-cols-2 justify-center gap-24 p-24">
                <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="#">
                    <InstagramIcon />
                    Instagram
                </Link>
                <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="#">
                    <GithubIcon />
                    Github
                </Link>
                <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="#">
                    <LinkedinIcon />
                    Linkedin
                </Link>
                <Link className="flex gap-3 items-center justify-center text-lime-300 hover:scale-105 duration-150 transition-all" href="#">
                    <Mail />
                    E-mail
                </Link>
            </div>
        </main>
    )
}