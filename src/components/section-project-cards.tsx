'use client'
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
    title: string;
    image: StaticImageData;
    children: ReactNode;
}

type TextProps = {
    children: ReactNode;
}

function SectionProjectCard({ title, image, children }: Props) {
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
            width: '0',
            opacity: 0,
            duration: 0,
            ease: 'power4.inOut',
        });

        animationCardDiv.current.to(card, {
            width: '100%',
            duration: 0.5,
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
        <section className="flex flex-col items-center justify-center rounded-lg gap-1 p-10">
            <div onMouseEnter={animationXStart} onMouseLeave={animationXReverse} className="relative flex flex-row gap-2 items-center justify-center rounded-md z-50 bg-zinc-950 bg-opacity-50 group overflow-hidden" ref={cardRef}>
                <div className="w-[42rem] p-3">
                    <Image
                        ref={imageRef}
                        src={image}
                        alt="Festa"
                        className="relative w-full h-40 object-cover rounded-md"
                    />
                    <strong className="text-3xl absolute top-4 left-6 group-hover:opacity-0">{title}</strong>
                </div>
                <div className="w-0 overflow-hidden opacity-0 px-2" ref={textRef}>
                    <h2 className="text-2xl font-bold z-50">
                        {title}
                    </h2>
                    <span>
                        {children}
                    </span>
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