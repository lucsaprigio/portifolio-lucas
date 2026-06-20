'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

let registered = false;

function ensureScrollTriggerRegistered() {
    if (!registered) {
        gsap.registerPlugin(ScrollTrigger);
        registered = true;
    }
}

type ScrollRevealOptions = {
    /** Seletor dos elementos filhos que devem animar individualmente (ex: ".reveal-item"). Se omitido, anima o próprio container. */
    targets?: string;
    /** Distância (px) que o elemento percorre verticalmente durante a entrada. */
    y?: number;
    /** Duração da animação em segundos. */
    duration?: number;
    /** Intervalo entre animações de itens (stagger), usado apenas quando `targets` é informado. */
    stagger?: number;
    /** Ponto do viewport em que o gatilho dispara. */
    start?: string;
};

/**
 * Hook utilitário para revelar seções/elementos ao entrar no viewport usando GSAP + ScrollTrigger.
 * Evita duplicar a configuração de timeline/trigger em cada componente de seção.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
    targets,
    y = 32,
    duration = 0.8,
    stagger = 0.12,
    start = "top 80%",
}: ScrollRevealOptions = {}) {
    const containerRef = useRef<T | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        ensureScrollTriggerRegistered();

        const elements = targets
            ? Array.from(container.querySelectorAll<HTMLElement>(targets))
            : [container];

        if (elements.length === 0) return;

        const tween = gsap.fromTo(
            elements,
            { autoAlpha: 0, y },
            {
                autoAlpha: 1,
                y: 0,
                duration,
                stagger,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container,
                    start,
                    toggleActions: "play none none none",
                },
            }
        );

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return containerRef;
}
