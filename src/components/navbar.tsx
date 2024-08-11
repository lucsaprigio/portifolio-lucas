import Link from "next/link";

export function Navbar() {
    return (
        <main className="flex items-center justify-around p-7">
            <div>
                Lucas Aprigio
            </div>
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