import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
    const [phase, setPhase] = useState(1);

    useEffect(() => {
        // Phase 1: 0s - 2s (fade in background and main title)
        const phase1Timer = setTimeout(() => {
            setPhase(2);
        }, 2000);

        // Phase 2: 2s - 4s (show quote, then fade it out)
        const phase2Timer = setTimeout(() => {
            setPhase(3);
        }, 4000);

        // Phase 3: 4s - 6s (show final message, then complete)
        const completeTimer = setTimeout(() => {
            onLoadingComplete();
        }, 6000);

        return () => {
            clearTimeout(phase1Timer);
            clearTimeout(phase2Timer);
            clearTimeout(completeTimer);
        };
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #0a0f1e 0%, #0f172a 40%, #1e293b 70%, #312e81 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
            {/* Animated gradient drift */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, rgba(49, 46, 129, 0.3) 0%, transparent 50%, rgba(30, 41, 59, 0.3) 100%)',
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10, 15, 30, 0.8) 100%)',
                }}
            />

            {/* Film grain */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <div className="film-grain" />
            </div>

            {/* Background repeating text drift (barely visible) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div
                    className="text-[15rem] md:text-[25rem] font-serif text-silverGlow/[0.02] whitespace-nowrap"
                    animate={{
                        x: ['-50%', '50%'],
                    }}
                    transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    KRUTHIKA KRUTHIKA KRUTHIKA
                </motion.div>
            </div>

            {/* Floating dust particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-silverGlow/10 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -80, -160],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            delay: Math.random() * 3,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}
            </div>

            {/* Main content container */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                {/* PHASE 1 & 2 & 3: Main title "Kruthika Akka." */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-silverGlow tracking-wider-2xl mb-12"
                    initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.02 }}
                    animate={{
                        opacity: phase >= 3 ? 0 : 1,
                        filter: 'blur(0px)',
                        scale: 1
                    }}
                    transition={{
                        opacity: { duration: phase >= 3 ? 1 : 1.5, delay: phase >= 3 ? 0 : 0.5 },
                        filter: { duration: 1.5, delay: 0.5 },
                        scale: { duration: 1.5, delay: 0.5 }
                    }}
                >
                    Kruthika Akka.
                </motion.h1>

                {/* PHASE 2: Quote that appears and fades */}
                {phase >= 2 && phase < 3 && (
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, filter: 'blur(15px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, filter: 'blur(10px)' }}
                        transition={{ duration: 1.2 }}
                    >
                        <p className="text-xl md:text-2xl lg:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                            Some bonds don't arrive loudly.
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl font-sans text-silverGlow/80 leading-relaxed">
                            They settle quietly.
                        </p>
                    </motion.div>
                )}

                {/* PHASE 2: Silver glow pulse behind title (when quote fades) */}
                {phase === 2 && (
                    <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle, rgba(203, 213, 225, 0.15) 0%, transparent 70%)',
                            filter: 'blur(60px)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0.4, 0.6, 0],
                            scale: [0.8, 1.1, 1, 1.1, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                        }}
                    />
                )}

                {/* PHASE 3: Final message */}
                {phase >= 3 && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.02 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-silverGlow tracking-wider text-glow">
                            This one is for you.
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Soft glow at bottom */}
            <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(203, 213, 225, 0.06) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </motion.div>
    );
};

export default LoadingScreen;
