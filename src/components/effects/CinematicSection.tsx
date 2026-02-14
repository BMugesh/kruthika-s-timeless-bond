import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CinematicSectionProps {
    children: ReactNode;
    className?: string;
}

const CinematicSection = ({ children, className = '' }: CinematicSectionProps) => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const section = sectionRef.current;

        // Camera movement effect on scroll
        gsap.to(section, {
            scale: 1.0,
            opacity: 0.85,
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                onLeave: () => {
                    gsap.to(section, { scale: 1.0, opacity: 0.85, duration: 0.6 });
                },
                onEnterBack: () => {
                    gsap.to(section, { scale: 1.02, opacity: 1, duration: 0.6 });
                },
            },
        });

        // Fade in from bottom with upward motion
        gsap.fromTo(
            section,
            {
                opacity: 0.2,
                y: 60,
                scale: 1.0,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1.02,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.trigger === section) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`min-h-screen flex items-center justify-center px-6 py-32 ${className}`}
            style={{
                willChange: 'transform, opacity',
            }}
        >
            {children}
        </section>
    );
};

export default CinematicSection;
