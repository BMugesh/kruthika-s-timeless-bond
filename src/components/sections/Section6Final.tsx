import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from '@/components/effects/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const Section6Final = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const section = sectionRef.current;

        // Camera zoom-out effect before fade
        gsap.to(section, {
            scale: 0.98,
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: 2,
            },
        });

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
            className="min-h-screen flex items-center justify-center px-6 py-32 relative"
            style={{
                willChange: 'transform, opacity',
            }}
        >
            <div className="max-w-4xl mx-auto text-center space-y-16">
                {/* Opening line */}
                <AnimatedText delay={0.5} duration={1.8}>
                    <p className="text-3xl md:text-5xl font-serif text-silverGlow tracking-wider">
                        This is a love letter.
                    </p>
                </AnimatedText>

                {/* "Not the romantic version" messaging */}
                <div className="space-y-8">
                    <AnimatedText delay={1.5} duration={1.8}>
                        <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                            Not the romantic version.
                        </p>
                    </AnimatedText>

                    <AnimatedText delay={2.3} duration={1.8} isEmotionalZoom>
                        <p className="text-3xl md:text-4xl font-serif text-silverGlow leading-relaxed">
                            The real one.
                        </p>
                    </AnimatedText>
                </div>

                {/* Loyalty, strength, people who stay */}
                <div className="space-y-6 mt-16">
                    <AnimatedText delay={3.5} duration={1.8}>
                        <p className="text-2xl md:text-4xl font-sans text-silverGlow/80 leading-relaxed">
                            The one that celebrates
                        </p>
                    </AnimatedText>

                    <AnimatedText delay={4.2} duration={1.8} isEmotionalZoom>
                        <p className="text-3xl md:text-5xl font-serif text-silverGlow">
                            loyalty,
                        </p>
                    </AnimatedText>

                    <AnimatedText delay={4.8} duration={1.8} isEmotionalZoom>
                        <p className="text-3xl md:text-5xl font-serif text-silverGlow">
                            strength,
                        </p>
                    </AnimatedText>

                    <AnimatedText delay={5.4} duration={1.8} isEmotionalZoom>
                        <p className="text-3xl md:text-5xl font-serif text-silverGlow">
                            and people who stay.
                        </p>
                    </AnimatedText>
                </div>

                {/* Final gratitude */}
                <div className="mt-24">
                    <AnimatedText delay={6.5} duration={2.0}>
                        <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                            So yeah,
                        </p>
                    </AnimatedText>

                    <AnimatedText delay={7.5} duration={2.2} isEmotionalZoom>
                        <motion.p
                            className="text-4xl md:text-6xl font-serif text-silverGlow text-glow-pulse tracking-wider mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.2, delay: 7.5 }}
                        >
                            Happy Valentine's Day, Akka.
                        </motion.p>
                    </AnimatedText>

                    <AnimatedText delay={9.0} duration={2.0}>
                        <p className="text-2xl md:text-3xl font-sans text-silverGlow/70 italic mt-12">
                            I'm grateful it's you.
                        </p>
                    </AnimatedText>
                </div>

                {/* Handwritten signature - delayed */}
                <AnimatedText delay={10.5} duration={2.5}>
                    <motion.div
                        className="mt-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, delay: 10.5 }}
                    >
                        <p className="text-xl md:text-2xl font-sans text-silverGlow/60 italic">
                            — Your little brother
                        </p>
                    </motion.div>
                </AnimatedText>

                {/* Fade to near-black */}
                <motion.div
                    className="absolute inset-0 bg-black pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 3, delay: 12 }}
                />
            </div>
        </section>
    );
};

export default Section6Final;
