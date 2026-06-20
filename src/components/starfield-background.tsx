'use client'
import { useEffect, useRef } from "react";

type Star = {
    x: number;
    y: number;
    radius: number;
    baseAlpha: number;
    twinkleSpeed: number;
    twinklePhase: number;
    driftSpeed: number;
    accent: boolean;
};

type ShootingStar = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    len: number;
    life: number; // 0..1, decai até sumir
    decay: number;
    accent: boolean;
};

const STAR_DENSITY = 1 / 9000; // ~1 estrela para cada 9000px² de tela
const MAX_STARS = 220;
const ACCENT_RGB = "190, 242, 100"; // lime-300, mesma cor de destaque do site

function createStars(width: number, height: number): Star[] {
    const count = Math.min(MAX_STARS, Math.floor(width * height * STAR_DENSITY));
    return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.1 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.25,
        twinkleSpeed: Math.random() * 0.6 + 0.2,
        twinklePhase: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.012 + 0.003,
        // ~12% das estrelas recebem um leve tom lime, o resto fica branco/discreto
        accent: Math.random() < 0.12,
    }));
}

function createShootingStar(width: number, height: number): ShootingStar {
    // Surge perto do topo, cruzando na diagonal para baixo (esquerda→direita ou direita→esquerda).
    const fromLeft = Math.random() < 0.5;
    const speed = Math.random() * 360 + 420; // px/s
    const angle = (Math.random() * 0.25 + 0.12) * Math.PI; // leve diagonal
    return {
        x: fromLeft ? Math.random() * width * 0.4 : width - Math.random() * width * 0.4,
        y: Math.random() * height * 0.45,
        vx: (fromLeft ? 1 : -1) * Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: Math.random() * 80 + 90,
        life: 1,
        decay: Math.random() * 0.5 + 0.6, // some em ~1.2–2s
        accent: Math.random() < 0.35,
    };
}

/**
 * Campo de estrelas fixo, renderizado uma única vez no layout raiz, atrás de todo o conteúdo.
 * Usa canvas + requestAnimationFrame (mais leve que GSAP para centenas de partículas redesenhadas
 * a cada frame) e respeita prefers-reduced-motion, pausando a cintilação/deriva para quem pediu
 * menos movimento. Não intercepta cliques (pointer-events: none) e não cria scroll horizontal.
 */
export function StarfieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        // Capturado em uma const própria: garante para o TypeScript que o elemento
        // permanece non-null dentro das closures abaixo (resize/tick/etc).
        const canvas: HTMLCanvasElement = canvasEl;

        const context2d = canvas.getContext("2d");
        if (!context2d) return;
        const ctx: CanvasRenderingContext2D = context2d;

        const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        let reduceMotion = reduceMotionQuery.matches;

        let stars: Star[] = [];
        let shootingStars: ShootingStar[] = [];
        let nextShootingIn = Math.random() * 2 + 2.5; // segundos até a próxima estrela cadente
        let width = 0;
        let height = 0;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);
        let frameId = 0;
        let lastTime = performance.now();

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            stars = createStars(width, height);
        }

        function paintBackground() {
            // Pinta a base escura do site (mesma cor de --background) diretamente no canvas,
            // já que ele é a camada mais ao fundo de toda a aplicação (fixed, z-index negativo).
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, width, height);
        }

        function drawStaticFrame() {
            paintBackground();
            for (const star of stars) {
                ctx.beginPath();
                ctx.fillStyle = star.accent
                    ? `rgba(${ACCENT_RGB}, ${star.baseAlpha * 0.8})`
                    : `rgba(255, 255, 255, ${star.baseAlpha})`;
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function tick(now: number) {
            const delta = (now - lastTime) / 1000;
            lastTime = now;

            paintBackground();
            for (const star of stars) {
                star.twinklePhase += star.twinkleSpeed * delta;
                const twinkle = (Math.sin(star.twinklePhase) + 1) / 2; // 0..1
                const alpha = star.baseAlpha * (0.55 + twinkle * 0.45);

                star.y += star.driftSpeed * delta * 10;
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }

                ctx.beginPath();
                ctx.fillStyle = star.accent
                    ? `rgba(${ACCENT_RGB}, ${alpha * 0.8})`
                    : `rgba(255, 255, 255, ${alpha})`;
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            // Estrelas cadentes ocasionais: agenda, move e desenha com rastro em degradê.
            nextShootingIn -= delta;
            if (nextShootingIn <= 0 && shootingStars.length < 3) {
                shootingStars.push(createShootingStar(width, height));
                nextShootingIn = Math.random() * 4 + 3; // próxima em ~3–7s
            }

            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const s = shootingStars[i];
                s.x += s.vx * delta;
                s.y += s.vy * delta;
                s.life -= s.decay * delta;

                if (s.life <= 0 || s.x < -s.len || s.x > width + s.len || s.y > height + s.len) {
                    shootingStars.splice(i, 1);
                    continue;
                }

                const mag = Math.hypot(s.vx, s.vy) || 1;
                const tailX = s.x - (s.vx / mag) * s.len;
                const tailY = s.y - (s.vy / mag) * s.len;
                const rgb = s.accent ? ACCENT_RGB : "255, 255, 255";

                const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
                gradient.addColorStop(0, `rgba(${rgb}, ${0.9 * s.life})`);
                gradient.addColorStop(1, `rgba(${rgb}, 0)`);

                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.6;
                ctx.lineCap = "round";
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();
            }

            frameId = requestAnimationFrame(tick);
        }

        function start() {
            cancelAnimationFrame(frameId);
            if (reduceMotion) {
                // Sem cintilação nem deriva: desenha uma única vez e para.
                drawStaticFrame();
                return;
            }
            lastTime = performance.now();
            frameId = requestAnimationFrame(tick);
        }

        function handleMotionPreferenceChange(event: MediaQueryListEvent) {
            reduceMotion = event.matches;
            start();
        }

        function handleResize() {
            resize();
            start();
        }

        resize();
        start();

        window.addEventListener("resize", handleResize);
        reduceMotionQuery.addEventListener("change", handleMotionPreferenceChange);

        // Pausa o RAF quando a aba não está visível, evitando trabalho desnecessário em background.
        function handleVisibilityChange() {
            if (document.hidden) {
                cancelAnimationFrame(frameId);
            } else {
                start();
            }
        }
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
            reduceMotionQuery.removeEventListener("change", handleMotionPreferenceChange);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            // z-index 0 (não negativo) propositalmente: com z-index negativo, este elemento fixed
            // ficaria atrás do background pintado do <body> (que não cria stacking context próprio),
            // ficando invisível. Em z-0 e sendo o primeiro nó renderizado, ele continua atrás de todo
            // o conteúdo das seções (que vem depois no DOM e cria seus próprios contextos via
            // position/relative, backdrop-blur, etc).
            className="pointer-events-none fixed inset-0 z-0 h-screen w-screen opacity-80"
        />
    );
}
