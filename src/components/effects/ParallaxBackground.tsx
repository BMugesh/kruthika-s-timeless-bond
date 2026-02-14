import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = () => {
    const bgRef = useRef<HTMLDivElement>(null);
    const layer1Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bgRef.current) return;

        // Scroll-scrubbed gradient deepening (dusk → midnight)
        gsap.to(bgRef.current, {
            background: 'linear-gradient(180deg, #020617 0%, #0a0f1e 50%, #1e293b 100%)',
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2,
            },
        });

        // Layer 1: Slow parallax drift (0.2x scroll speed)
        if (layer1Ref.current) {
            gsap.to(layer1Ref.current, {
                y: '20%',
                scrollTrigger: {
                    trigger: document.body,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 3,
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            {/* Main background with scroll-scrubbed deepening */}
            <div
                ref={bgRef}
                className="fixed inset-0 w-full h-full -z-10"
                style={{
                    background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #312e81 100%)',
                    willChange: 'background',
                }}
            />

            {/* Layer 1: Slow drift parallax layer */}
            <div
                ref={layer1Ref}
                className="fixed inset-0 w-full h-full -z-9 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(49, 46, 129, 0.15) 0%, transparent 60%)',
                    willChange: 'transform',
                }}
            />
        </>
    );
};

export default ParallaxBackground;
