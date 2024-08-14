import Link from "next/link";
import logoSvg from "../../public/logo-fundo.svg";
import Image from "next/image";

export function Navbar() {
    return (
        <main className="flex items-center justify-around p-7 shadow-sm">
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
            <div className="space-x-14 text-xl">
                <Link href="/">
                    Sobre
                </Link>
                <Link href="/">
                    Stacks
                </Link>
                <Link href="/">
                    Projetos
                </Link>
                <Link href="/">
                    Contato
                </Link>
            </div>
        </main>
    )
}