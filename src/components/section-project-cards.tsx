'use client'
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

type Props = {
    title: string;
    image: StaticImageData;
    children: ReactNode;
    site: string;
}

type TextProps = {
    children: ReactNode;
}

function SectionProjectCard({ title, image, children, site }: Props) {
    const animationCardDiv = useRef<any | null>(null);

    const cardRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const text = textRef.current;
        const image = imageRef.current;

        animationCardDiv.current = gsap.timeline({ paused: true });

        animationCardDiv.current.to(image, {
            opacity: 0.1,
            duration: 0,
            ease: 'power4.inOut',
        });

        animationCardDiv.current.to(card, {
            duration: 0.2,
            ease: 'power4.inOut',
        });

        animationCardDiv.current.to(text, {
            width: '100%',
            opacity: 1,
            duration: 0.2,
            ease: 'power4.inOut',
        }, "-=0.25");



    }, [cardRef, textRef, imageRef])


    function animationXStart() {
        animationCardDiv.current.play();
    };

    function animationXReverse() {
        animationCardDiv.current.reverse();
    };

    return (
        <section className="flex items-center justify-center gap-1 rounded-lg">
            <div
                onMouseEnter={animationXStart}
                onMouseLeave={animationXReverse}
                className="group relative z-10 flex h-60 w-80 flex-row items-center justify-center gap-2 overflow-hidden rounded-xl border border-lime-300/30 bg-zinc-950/60 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:border-lime-300/70 hover:shadow-[0_0_30px_rgba(190,242,100,0.15)]"
                ref={cardRef}
            >
                <div className="relative flex h-full w-full items-center justify-start p-3">
                    <Image
                        ref={imageRef}
                        src={image}
                        alt={`Captura de tela do projeto ${title}`}
                        className="absolute bottom-0 left-0 h-40 w-full rounded-md object-contain opacity-75"
                    />
                    <strong className="absolute left-6 top-4 text-2xl font-bold group-hover:opacity-0 md:text-3xl">{title}</strong>
                </div>
                <div className="absolute w-0 overflow-hidden px-2 opacity-0" ref={textRef}>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-lg font-bold">
                            Tecnologias utilizadas
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {children}
                        </div>
                        {
                            !!site &&
                            <Link
                                className="rounded-lg border border-gray-50 px-3 py-1 text-center text-gray-50 transition-all duration-150 hover:bg-gray-50 hover:text-zinc-950"
                                href={site}
                                target={site.startsWith("/") ? undefined : "_blank"}
                                rel={site.startsWith("/") ? undefined : "noopener noreferrer"}
                            >
                                Acessar
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

function Text({ children }: TextProps) {
    return (
        <span className="text-lg">
            {children}
        </span>
    )
}

SectionProjectCard.Text = Text;

export { SectionProjectCard };