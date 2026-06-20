'use client'
import { MouseEvent, ReactNode } from 'react';

interface ButtonProps {
    targedDiv: string;
    children: ReactNode;
    /** Disparado após o clique, executado junto com o scroll (ex: fechar um Sheet/menu mobile). */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonScroll({ targedDiv, children, onClick }: ButtonProps) {
    function scrollToDiv(targedDiv: string) {
        const targetDiv = document.getElementById(targedDiv);
        const targetPosition = targetDiv!.offsetTop;

        // Realiza o scroll suave até a posição da div de destino
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    };

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        scrollToDiv(targedDiv);
        onClick?.(event);
    }

    return (
        <button className="relative overflow-hidden group/link text-gray-100 text-lg hover:text-gray-100 hover:font-bold duration-300 border-lime-300" onClick={handleClick}>
            {children}
        </button>
    )
}