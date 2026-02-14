import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedText from '@/components/effects/AnimatedText';

const Section1Opening = () => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const [startAnimations, setStartAnimations] = useState(false);

    useEffect(() => {
        // Start animations immediately when component mounts (after loading screen)
        setStartAnimations(true);

        // Show scroll indicator after all text animations complete
        const timer = setTimeout(() => {
            setShowScrollIndicator(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                {/* First line: "Kruthika Akka." */}
                {startAnimations && (
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        transition={{ duration: 1.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif text-silverGlow tracking-wider-xl">
                            Kruthika Akka.
                        </h1>
                    </motion.div>
                )}

                {/* Second line: "Four months." */}
                {startAnimations && (
                    <motion.div
                        initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        transition={{ duration: 1.6, delay: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <p className="text-3xl md:text-5xl font-sans text-silverGlow/90 tracking-wider">
                            Four months.
                        </p>
                    </motion.div>
                )}

                {/* Multi-line quote */}
                <div className="space-y-6">
                    {startAnimations && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ duration: 1.4, delay: 4.5, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <p className="text-xl md:text-2xl font-sans text-silverGlow/80 leading-relaxed">
                                    That's all it took for you to go from
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ duration: 1.4, delay: 5.0, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <p className="text-xl md:text-2xl font-sans text-silverGlow/80 leading-relaxed">
                                    'just someone in my life'
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ duration: 1.4, delay: 5.5, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <p className="text-xl md:text-2xl font-sans text-silverGlow/80 leading-relaxed">
                                    to
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ duration: 1.4, delay: 6.0, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <p className="text-2xl md:text-3xl font-serif text-silverGlow text-glow tracking-wider">
                                    'don't even think about touching my sister.'
                                </p>
                            </motion.div>
                        </>
                    )}
                </div>

                {/* New emotional ending */}
                <div className="space-y-8 mt-16">
                    {startAnimations && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ duration: 1.4, delay: 7.5, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                                    But somehow…
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ duration: 1.4, delay: 8.0, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <p className="text-2xl md:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                                    in such a short time…
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(8px)', y: 30, scale: 1.03 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
                                transition={{ duration: 1.6, delay: 8.5, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <p className="text-3xl md:text-4xl font-serif text-silverGlow text-glow-pulse tracking-wider">
                                    you became family.
                                </p>
                            </motion.div>
                        </>
                    )}
                </div>
            </div>

            {/* Scroll indicator */}
            {showScrollIndicator && (
                <motion.div
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-silverGlow/50 text-sm font-sans tracking-wider">SCROLL</span>
                        <motion.div
                            className="w-6 h-10 border-2 border-silverGlow/30 rounded-full flex items-start justify-center p-2"
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-1.5 h-1.5 bg-silverGlow/50 rounded-full"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default Section1Opening;
