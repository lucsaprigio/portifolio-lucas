'use client'
import { useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { FaBars } from "react-icons/fa";
import { ButtonScroll } from "./button-scroll";

const links = [
    { targedDiv: "sobre", label: "Sobre" },
    { targedDiv: "stacks", label: "Stacks" },
    { targedDiv: "projetos", label: "Projetos" },
    { targedDiv: "contato", label: "Contato" },
];

export function MenuDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button
                    className="flex h-11 w-11 items-center justify-center text-lime-300 transition-transform duration-200 hover:scale-110 active:scale-95"
                    aria-label="Abrir menu de navegação"
                >
                    <FaBars size={28} />
                </button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="glass-panel flex w-[58vw] max-w-[15rem] flex-col border-l border-border/60 text-foreground sm:max-w-[16rem]"
            >
                <SheetHeader>
                    <SheetTitle className="text-left font-mono text-xs font-normal text-lime-300/90">
                        {"// menu"}
                    </SheetTitle>
                </SheetHeader>
                <Separator className="my-3 bg-border/60" />
                <nav className="flex flex-1 flex-col gap-1" aria-label="Navegação principal">
                    {links.map(({ targedDiv, label }) => (
                        <SheetClose key={targedDiv} asChild>
                            <ButtonScroll targedDiv={targedDiv}>
                                <span className="flex min-h-11 w-full items-center rounded-md px-3 py-2 text-sm transition-colors duration-200 hover:bg-lime-300/10 hover:text-lime-300">
                                    {label}
                                </span>
                            </ButtonScroll>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
