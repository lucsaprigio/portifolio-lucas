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
        <section className="flex items-center justify-center rounded-lg gap-1 p-10">
            <div onMouseEnter={animationXStart} onMouseLeave={animationXReverse} className="relative flex flex-row w-80 h-60 p-2 gap-2 items-center justify-center border-[1px] border-lime-300 border-opacity-50 rounded-md z-50 bg-zinc-950 bg-opacity-50 group overflow-hidden" ref={cardRef}>
                <div className="relative flex items-center justify-start w-full h-full p-3">
                    <Image
                        ref={imageRef}
                        src={image}
                        alt="Festa"
                        className="absolute w-full h-40 bottom-0 left-0 rounded-md opacity-75 object-contain"
                        objectFit="contain"
                    />
                    <strong className="text-3xl absolute top-4 left-6 group-hover:opacity-0">{title}</strong>
                </div>
                <div className="absolute w-0 overflow-hidden opacity-0 px-2" ref={textRef}>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-2xl font-bold">
                            Tecnologias utilizadas
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {children}
                        </div>
                        {
                            !!site &&
                            <Link className="border-[1px] border-gray-50 text-gray-50 hover:brightness-75 rounded-lg text-center transition-all duration-150" href={site} target="blank">
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