'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBars } from "react-icons/fa";
import { ButtonScroll } from "./button-scroll";


export function MenuDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="text-lime-300 transition-transform duration-200 hover:scale-110 active:scale-95" aria-label="Abrir menu de navegação">
                    <FaBars size={32} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col items-center justify-center space-y-2 w-72 glass-panel text-foreground">
                <DropdownMenuLabel className="text-muted-foreground">Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="flex flex-col space-y-7 py-2">
                    <DropdownMenuItem>
                        <ButtonScroll targedDiv="sobre">
                            Sobre
                        </ButtonScroll>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lg">
                        <ButtonScroll targedDiv="stacks">
                            Stacks
                        </ButtonScroll>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lg">
                        <ButtonScroll targedDiv="projetos">
                            Projetos
                        </ButtonScroll>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lg">
                        <ButtonScroll targedDiv="contato">
                            Contato
                        </ButtonScroll>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}