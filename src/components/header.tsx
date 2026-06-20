'use client'
import logoSvg from "../../public/logo.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ButtonScroll } from "./button-scroll";

export function Header() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({ defaults: { ease: "power3.out" } })
                .fromTo(
                    ".hero-kicker",
                    { autoAlpha: 0, y: 16 },
                    { autoAlpha: 1, y: 0, duration: 0.6 }
                )
                .fromTo(
                    ".hero-logo",
                    { autoAlpha: 0, scale: 0.92 },
                    { autoAlpha: 1, scale: 1, duration: 0.7 },
                    "-=0.3"
                )
                .fromTo(
                    ".hero-title",
                    { autoAlpha: 0, y: 24 },
                    { autoAlpha: 1, y: 0, duration: 0.7 },
                    "-=0.4"
                )
                .fromTo(
                    ".hero-description",
                    { autoAlpha: 0, y: 24 },
                    { autoAlpha: 1, y: 0, duration: 0.7 },
                    "-=0.45"
                )
                .fromTo(
                    ".hero-cta",
                    { autoAlpha: 0, y: 16 },
                    { autoAlpha: 1, y: 0, duration: 0.5 },
                    "-=0.35"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main
            id="header"
            ref={containerRef}
            className="relative flex flex-col items-center justify-center gap-8 overflow-hidden bg-[url('/background.png')] bg-cover bg-no-repeat px-6 py-28 text-center after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-background after:opacity-90 md:py-36"
        >
            <div className="bg-grid mask-fade-bottom absolute inset-0 z-0 opacity-40" aria-hidden="true" />

            <span className="hero-kicker relative z-10 font-mono text-sm text-lime-300/90">
                {"// desenvolvimento de sistemas & tecnologia"}
            </span>

            <div className="hero-logo relative z-10">
                <Image
                    src={logoSvg}
                    alt="Logo LATech"
                    className="h-auto w-56 object-contain drop-shadow-[0_0_30px_rgba(190,242,100,0.25)] md:w-72"
                    priority
                />
            </div>

            <div className="relative z-10 flex max-w-2xl flex-col items-center gap-5">
                <h1 className="hero-title text-3xl font-bold tracking-tight md:text-4xl">
                    Minha carreira em tecnologia
                </h1>
                <p className="hero-description text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
                    Meu primeiro contato com programação foi em 2020, com JavaScript. Desde então, construí uma trajetória
                    que hoje passa por Next.js, React Native, Delphi e Java Spring. Este site reúne alguns dos projetos que
                    desenvolvi e os serviços em tecnologia que ofereço — um ponto de contato direto para clientes e parceiros.
                </p>
            </div>

            <div className="hero-cta relative z-10">
                <ButtonScroll targedDiv="projetos">
                    <span className="inline-flex items-center gap-2 rounded-md border border-lime-300/40 px-5 py-2.5 text-sm font-semibold text-lime-300 transition-all duration-300 hover:bg-lime-300 hover:text-zinc-950 hover:shadow-[0_0_24px_rgba(190,242,100,0.35)]">
                        Ver projetos
                    </span>
                </ButtonScroll>
            </div>
        </main>
    )
}
