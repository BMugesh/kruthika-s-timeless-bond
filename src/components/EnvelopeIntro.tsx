import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeIntroProps {
    onComplete: () => void;
}

const EnvelopeIntro = ({ onComplete }: EnvelopeIntroProps) => {
    const [envelopeOpened, setEnvelopeOpened] = useState(false);
    const [letterRead, setLetterRead] = useState(false);
    const [transitioning, setTransitioning] = useState(false);

    const handleEnvelopeClick = () => {
        if (!envelopeOpened) {
            setEnvelopeOpened(true);
        }
    };

    const handleContinue = () => {
        setTransitioning(true);
        setTimeout(() => {
            onComplete();
        }, 2000); // 2s transition
    };

    return (
        <motion.div
            className="fixed inset-0 z-[20000] flex items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #0a0f1e 0%, #0f172a 40%, #1e293b 70%, #312e81 100%)',
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 20%, rgba(10, 15, 30, 0.9) 100%)',
                }}
            />

            {/* Film grain */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <div className="film-grain" />
            </div>

            {/* Floating dust particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-silverGlow/10 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, -200],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 6,
                            delay: Math.random() * 5,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}
            </div>

            {/* Background darkening when envelope opens */}
            <AnimatePresence>
                {envelopeOpened && (
                    <motion.div
                        className="absolute inset-0 bg-black pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 1.5 }}
                    />
                )}
            </AnimatePresence>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-2xl px-6">
                <AnimatePresence mode="wait">
                    {!envelopeOpened ? (
                        // Envelope (closed)
                        <motion.div
                            key="envelope"
                            className="flex flex-col items-center cursor-pointer"
                            onClick={handleEnvelopeClick}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 1.5 }}
                        >
                            {/* Envelope breathing animation */}
                            <motion.div
                                className="relative"
                                animate={{
                                    scale: [1, 1.015, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                {/* Envelope body */}
                                <div
                                    className="w-80 h-56 rounded-sm relative"
                                    style={{
                                        background: 'linear-gradient(135deg, #475569 0%, #64748b 100%)',
                                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    {/* Paper texture */}
                                    <div
                                        className="absolute inset-0 opacity-20"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                        }}
                                    />

                                    {/* Envelope flap */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-28 origin-top"
                                        style={{
                                            background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                                            clipPath: 'polygon(0 0, 50% 60%, 100% 0)',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                                        }}
                                    />

                                    {/* Wax seal */}
                                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center"
                                            style={{
                                                background: 'radial-gradient(circle, #cbd5e1 0%, #94a3b8 100%)',
                                                boxShadow: '0 4px 12px rgba(203, 213, 225, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
                                            }}
                                        >
                                            <span className="text-steelBlue text-xs font-serif">K</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* "Open when ready" text */}
                            <motion.p
                                className="text-silverGlow/70 text-lg font-sans mt-12 tracking-wider"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, delay: 1 }}
                            >
                                Open when ready.
                            </motion.p>
                        </motion.div>
                    ) : !letterRead ? (
                        // Letter (opened)
                        <motion.div
                            key="letter"
                            className="relative"
                            initial={{ opacity: 0, y: 100, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                        >
                            {/* Letter paper */}
                            <div
                                className="w-full max-w-xl mx-auto p-12 rounded-sm relative"
                                style={{
                                    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                                    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), inset 0 1px 3px rgba(255, 255, 255, 0.05)',
                                }}
                            >
                                {/* Paper texture */}
                                <div
                                    className="absolute inset-0 opacity-10 rounded-sm"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                    }}
                                />

                                {/* Letter content */}
                                <div className="relative z-10 space-y-6 text-center">
                                    {/* Lines with blur-to-clear animation */}
                                    {[
                                        { text: "My Kruthika Akka,", delay: 0.5, glow: true },
                                        { text: "Before anything else…", delay: 1.1 },
                                        { text: "There's something I don't say enough.", delay: 1.7 },
                                        { text: "Respect isn't always loud.", delay: 2.5 },
                                        { text: "But it's real.", delay: 3.1 },
                                        { text: "And I hope you feel it here.", delay: 3.9, glow: true },
                                        { text: "This isn't just a page.", delay: 5.0 },
                                        { text: "It's intention.", delay: 5.6 },
                                        { text: "It's effort.", delay: 6.2 },
                                        { text: "It's me valuing you.", delay: 6.8, glow: true },
                                    ].map((line, index) => (
                                        <motion.p
                                            key={index}
                                            className={`font-serif text-silverGlow leading-relaxed ${line.glow ? 'text-glow text-xl md:text-2xl' : 'text-lg md:text-xl text-silverGlow/90'
                                                }`}
                                            initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
                                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                                            transition={{ duration: 1.4, delay: line.delay, ease: [0.25, 0.1, 0.25, 1] }}
                                        >
                                            {line.text}
                                        </motion.p>
                                    ))}

                                    {/* Continue button */}
                                    <motion.button
                                        className="mt-16 text-silverGlow/60 text-sm font-sans tracking-wider hover:text-silverGlow/90 transition-colors duration-500"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 8 }}
                                        onClick={handleContinue}
                                    >
                                        Continue when you're ready.
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                {/* Transition overlay */}
                <AnimatePresence>
                    {transitioning && (
                        <motion.div
                            className="fixed inset-0 z-[30000]"
                            style={{
                                background: 'linear-gradient(180deg, #020617 0%, #0a0f1e 50%, #1e293b 100%)',
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default EnvelopeIntro;
