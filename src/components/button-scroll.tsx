'use client'
import { ReactNode } from 'react';

interface ButtonProps {
    targedDiv: string;
    children: ReactNode;
}

export function ButtonScroll({ targedDiv, children }: ButtonProps) {
    function scrollToDiv(targedDiv: string) {
        const targetDiv = document.getElementById(targedDiv);
        const targetPosition = targetDiv!.offsetTop;

        // Realiza o scroll suave até a posição da div de destino
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    };

    return (
        <button className="relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-100 hover:font-bold duration-300 border-lime-300" onClick={() => scrollToDiv(targedDiv)}>
            {children}
        </button>
    )
}