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
                <button className="text-lime-300">
                    <FaBars size={38} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col items-center justify-center space-y-2 w-80 bg-slate-950 text-white">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="flex flex-col space-y-7">
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