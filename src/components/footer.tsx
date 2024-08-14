import Image from "next/image";
import logoSvg from "../../public/logo-fundo.svg";

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
        </footer>
    )
}