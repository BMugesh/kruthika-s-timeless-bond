import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '@/components/effects/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const Section4Memory = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [showImage, setShowImage] = useState(false);
    const [showQuote, setShowQuote] = useState(false);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Special Memory Flash transition
        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            onEnter: () => {
                setIsInView(true);
                setShowImage(true);
                setTimeout(() => setShowQuote(true), 1500); // Slower reveal
            },
            onLeave: () => {
                setIsInView(false);
            },
            onEnterBack: () => {
                setIsInView(true);
                setShowImage(true);
                setShowQuote(true);
            },
            onLeaveBack: () => {
                setIsInView(false);
                setShowImage(false);
                setShowQuote(false);
            },
        });

        return () => {
            trigger.kill();
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
            {/* Screen darkens 20% when entering memory */}
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        className="fixed inset-0 bg-black z-[5] pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showImage && (
                    <>
                        {/* Image container with blur-to-focus */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center z-20"
                            initial={{ opacity: 0, scale: 1.05, filter: 'blur(15px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                            transition={{ duration: 2.5, ease: 'easeOut' }} // Slower transition
                        >
                            <div className="relative w-full max-w-3xl aspect-[4/3] overflow-hidden rounded-lg">
                                {/* Placeholder for user image */}
                                <div
                                    className="w-full h-full bg-gradient-to-br from-steelBlue to-duskBlue-light"
                                    style={{
                                        filter: 'saturate(0.8) brightness(1.1) hue-rotate(-10deg)',
                                        boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.3)',
                                    }}
                                >
                                    {/* Film grain overlay on image */}
                                    <div
                                        className="absolute inset-0 opacity-10"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                        }}
                                    />

                                    {/* Vignette on image */}
                                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-nightBlue/40" />

                                    {/* Placeholder text */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <p className="text-silverGlow/40 text-xl font-sans italic">
                                            [Your image will appear here]
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quote overlay - slower reveal */}
                        {showQuote && (
                            <div className="relative z-30 max-w-3xl mx-auto text-center">
                                <AnimatedText delay={0.5} duration={2.0}>
                                    <p className="text-3xl md:text-5xl font-serif text-silverGlow text-glow tracking-wider">
                                        Memory Flash
                                    </p>
                                </AnimatedText>

                                <AnimatedText delay={1.5} duration={2.0}>
                                    <p className="text-xl md:text-2xl font-sans text-silverGlow/80 mt-8 leading-relaxed">
                                        Some moments don't need words.
                                    </p>
                                </AnimatedText>

                                <AnimatedText delay={2.5} duration={2.0}>
                                    <p className="text-xl md:text-2xl font-sans text-silverGlow/80 mt-4 leading-relaxed">
                                        They just stay.
                                    </p>
                                </AnimatedText>
                            </div>
                        )}
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Section4Memory;
